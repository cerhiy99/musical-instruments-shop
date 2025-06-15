const fs = require('fs/promises');
const fsp = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const crypto = require('crypto');
const { Category, Product, ProductPrice } = require('../models/models')
const fsSync=fsp;

const parser = new xml2js.Parser({ explicitArray: false });

class ParseController {
  static parseGroups(groupsNode) {
    if (!groupsNode) return [];

    // Якщо Группа - не масив, то обгортаємо в масив
    const groups = Array.isArray(groupsNode.Группа) ? groupsNode.Группа : [groupsNode.Группа];

    return groups.map(group => ({
      id: group.Ид,
      version: group.НомерВерсии,
      deleted: group.ПометкаУдаления === 'true',
      name: group.Наименование,
      children: group.Группы ? this.parseGroups(group.Группы) : [],
    }));
  }
  static async saveCategoriesToDB(categories, parentId = null) {
    for (const cat of categories) {
      // Зберігаємо категорію в базу
      const [category, created] = await Category.findOrCreate({
        where: { id: cat.id },
        defaults: {
          id: cat.id,
          name: cat.name,
          version: cat.version || null,
          deleted: cat.deleted || false,
          parentId: parentId,
        }
      });
  
      // Якщо категорія існує, можемо оновити (опціонально)
      if (!created) {
        await category.update({
          name: cat.name,
          version: cat.version || null,
          deleted: cat.deleted || false,
          parentId: parentId,
        });
      }
  
      // Рекурсивно зберігаємо дітей, якщо є
      if (cat.children && cat.children.length > 0) {
        await this.saveCategoriesToDB(cat.children, category.id);
      }
    }
  }
  

  static async parseCategoryGroupsFromFile(relativeFilePath) {
    const filePath = relativeFilePath;
  
    try {
      const xmlData = await fs.readFile(filePath, 'utf-8');
      const parser = new xml2js.Parser({
        explicitArray: false,
        mergeAttrs: true,
        trim: true,
        ignoreAttrs: false,
      });
      const result = await parser.parseStringPromise(xmlData);
  
      const commercialInfo = result['КоммерческаяИнформация'];
      if (!commercialInfo || !commercialInfo.Классификатор) {
        console.warn('❌ Некоректна структура XML — відсутній Классификатор');
        return [];
      }
  
      const classifier = commercialInfo.Классификатор;
      const groupsNode = classifier.Группы;
  
      if (!groupsNode) {
        console.warn('❌ Відсутні групи у класифікаторі');
        return [];
      }
  
      // Рекурсивний парсинг груп
      const categories = this.parseGroups(groupsNode);
  
      // Запис у файл
      const outputFile = path.resolve(__dirname, '../files/categories.json');
      await fs.writeFile(outputFile, JSON.stringify(categories, null, 2), 'utf-8');
  
      console.log('✅ Категорії успішно записані у файл:', outputFile);
  
      // Збереження у базу
      await this.saveCategoriesToDB(categories);
  
      console.log('✅ Категорії успішно збережені в базу');
  
      return categories;
    } catch (err) {
      console.error('Помилка при парсингу категорій:', err);
      return [];
    }
  }


  static async saveProductsToDB(products) {
    const promises = products.map(p =>
      Product.upsert({
        id: p.id,
        article: p.article,
        name_ru: p.nameRu,
        name_en: p.nameEn,
        name_uk: p.nameUk,
        description_ru: p.descriptionRu,
        description_uk: p.descriptionUk,
        description_en: p.descriptionEn,
        code: p.code,
        image: p.image,
        categoryId: p.groupId,
        type: p.type,
        kind: p.kind,
      })
    );
    await Promise.all(promises);
  }

  static async parseProductFromFile(relativeFilePath) {
    const filePath = relativeFilePath;
    const outputPath = path.resolve(__dirname, '../files/product.json');
    const errorLogPath = path.resolve(__dirname, '../files/errorProduct.txt');

    try {
      const data = await fs.readFile(filePath, 'utf8');
      const result = await parser.parseStringPromise(data);

      const catalog = result?.['КоммерческаяИнформация']?.['Каталог'];
      const products = catalog?.['Товары']?.['Товар'];

      if (!products) {
        return;
      }
      const formattedProducts = Array.isArray(products) ? products : [products];

      const safeTrim = (str) => (str ? str.replace('[HTML]', '').trim() : '');

      const mapped = formattedProducts.map((product) => {
        const props = product['ЗначенияРеквизитов']?.['ЗначениеРеквизита'] || [];
        const propsArray = Array.isArray(props) ? props : [props];

        const getProp = (name) =>
          propsArray.find((p) => p['Наименование'] === name)?.['Значение'] || '';
        return {
          id: product['Ид'],
          article: product['Артикул'],
          name: product['Наименование'],
          nameRu: getProp('НаименованиеРус'),
          nameEn: getProp('НаименованиеАнг'),
          nameUk: getProp('Полное наименование'),

          descriptionRu: (product['Описание'] || '').trim(),
          descriptionUk: safeTrim(getProp('ОписУкр')),
          descriptionEn: safeTrim(getProp('ОписАнг')),

          code: getProp('Код'),
          image: product['Картинка'],
          groupId: product['Группы']?.['Ид'],
          type: getProp('ТипНоменклатуры'),
          kind: getProp('ВидНоменклатуры'),
        };
      });

      // --- Запис у файл ---
      let existing = [];
      if (fsSync.existsSync(outputPath)) {
        try {
          const raw = await fs.readFile(outputPath, 'utf8');
          existing = JSON.parse(raw);
        } catch (e) {
          await fs.appendFile(errorLogPath, `❌ Помилка читання product.json: ${e.message}\n`);
        }
      }

      const map = new Map(existing.map((p) => [p.id, p]));
      mapped.forEach((p) => map.set(p.id, p));
      const finalList = Array.from(map.values());

      await fs.writeFile(outputPath, JSON.stringify(finalList, null, 2), 'utf8');
      console.log(`✅ Збережено ${mapped.length} товарів. Загальна кількість: ${finalList.length}`);
      
      // --- Збереження у базу ---
      await this.saveProductsToDB(finalList);
      console.log('✅ Товари успішно збережені в базу');

    } catch (err) {
      const errorMessage = `❌ Помилка обробки файлу продукту ${filePath}: ${err.message}\n`;
      await fs.appendFile(errorLogPath, errorMessage);
      console.error(errorMessage);
    }
  }

  

  static async parseStockFromFile(relativeFilePath) {
    const filePath=relativeFilePath;
    //const filePath = path.resolve(__dirname, relativeFilePath);
    const outputPath = path.resolve(__dirname, "../files/parsed-stock.json");
    const errorLogPath = path.resolve(__dirname, "../files/errorStock.txt");
  
    try {
      const xml = await fs.readFile(filePath, "utf8");
  
      const result = await xml2js.parseStringPromise(xml, { explicitArray: false });
  
      const offers = result?.["КоммерческаяИнформация"]
                           ?.["ПакетПредложений"]
                           ?.["Предложения"]
                           ?.["Предложение"];
  
      if (!offers) {
        const message = `❌ Жодної пропозиції не знайдено у файлі: ${relativeFilePath}\n`;
        await fs.appendFile(errorLogPath, message);
        console.warn(message);
        return;
      }
  
      const stockList = Array.isArray(offers) ? offers : [offers];
  
      const parsedData = stockList.map((offer) => ({
        id: offer["Ид"],
        quantity: Number(
          offer?.["Остатки"]?.["Остаток"]?.["Количество"] || 0
        ),
      }));
  
      // Завантажити існуючі дані
      let existingData = [];
      if (fsp.existsSync(outputPath)) {
        try {
          const raw = await fs.readFile(outputPath, "utf8");
          existingData = JSON.parse(raw);
        } catch (e) {
          await fs.appendFile(errorLogPath, `❌ Помилка читання parsed-stock.json: ${e.message}\n`);
        }
      }
  
      // Оновлення або додавання по id
      const updatedMap = new Map(existingData.map(item => [item.id, item]));
      parsedData.forEach(item => {
        updatedMap.set(item.id, item);
      });
  
      const finalData = Array.from(updatedMap.values());
  
      // Запис у файл
      await fs.writeFile(outputPath, JSON.stringify(finalData, null, 2), "utf8");
  
      console.log("✅ Дані записано у:", outputPath);
      return finalData;
  
    } catch (err) {
      const errorMessage = `❌ Помилка обробки файлу залишків ${relativeFilePath}: ${err.message}\n`;
      await fs.appendFile(errorLogPath, errorMessage);
      console.error(errorMessage);
    }
  }
  
  static async parsePricesFromFileAndSave(relativeFilePath) {
    const filePath = relativeFilePath;
    const outputFilePath = path.resolve(__dirname, "../files/parsed-price.json");
    const errorLogPath = path.resolve(__dirname, "../files/errorPrice.txt");
  
    try {
      const xml = await fs.readFile(filePath, 'utf8');
      const result = await xml2js.parseStringPromise(xml, { explicitArray: false, ignoreAttrs: true });
  
      const offers = result?.["КоммерческаяИнформация"]?.["ПакетПредложений"]?.["Предложения"]?.["Предложение"];
      if (!offers) return;
  
      const offersArray = Array.isArray(offers) ? offers : [offers];
  
      const newParsed = offersArray.map(offer => {
        const prices = offer["Цены"]?.["Цена"];
        const pricesArray = Array.isArray(prices) ? prices : [prices];
  
        return {
          id: offer["Ид"],
          prices: pricesArray.map(price => ({
            price: Number(price["ЦенаЗаЕдиницу"]),
            currency: price["Валюта"],
            priceTypeId: price["ИдТипаЦены"],
            representation: price["Представление"]
          }))
        };
      });
  
      // Зберегти у JSON-файл (опційно)
      let existingData = [];
      if (fsp.existsSync(outputFilePath)) {
        try {
          const raw = await fs.readFile(outputFilePath, 'utf8');
          existingData = JSON.parse(raw);
        } catch (e) {
          await fs.appendFile(errorLogPath, `❌ Помилка читання parsed-price.json: ${e.message}\n`);
        }
      }
  
      const updatedMap = new Map(existingData.map(item => [item.id, item]));
      newParsed.forEach(item => updatedMap.set(item.id, item));
      const mergedData = Array.from(updatedMap.values());
      await fs.writeFile(outputFilePath, JSON.stringify(mergedData, null, 2), 'utf8');
      console.log(`✅ Дані успішно записані у файл ${outputFilePath}`);
  
      // Збереження у БАЗУ
      for (const item of newParsed) {
        const externalId = item.id.split('#')[0]; // тільки перший UUID
        const product = await Product.findOne({ where: { id:externalId } });
  
        if (!product) {
          await fs.appendFile(errorLogPath, `❌ Продукт не знайдено: ${externalId}\n`);
          continue;
        }
  
        await ProductPrice.destroy({ where: { productId: product.id } });
  
        for (const p of item.prices) {
          const price = parseFloat(p.price);
          const discount = 0;
          const priceWithDiscount = parseFloat((price * (1 - discount / 100)).toFixed(2));
  
          await ProductPrice.create({
            productId: product.id,
            price,
            discount,
            priceWithDiscount,
            currency: p.currency || 'UAH',
          });
        }
      }
  
      console.log('✅ Ціни успішно збережені в базу');
      return mergedData;
  
    } catch (err) {
      const errorMessage = `❌ Помилка обробки файлу з цінами ${relativeFilePath}: ${err.message}\n`;
      await fs.appendFile(errorLogPath, errorMessage);
      console.error(errorMessage);
    }
  }
  
  

  static async detectFileType(filePath) {
    try {

      const content = await fs.readFile(filePath, 'utf8');

      if (content.includes('<Остатки') || content.includes('<Остаток')) return 'stock';
      if (content.includes('>Основной каталог товаров<')) return 'product';
      if (content.includes('<Цены') || content.includes('<Цена')) return 'price';
      if (content.includes(content.includes('Группы')&&content.includes('Группа'))) return 'category';
      
      return 'uknow';
    } catch (err) {
      console.error(`Помилка читання файлу щоб зрозуміти тип ${filePath}:`, err);
      return 'unknown';
    }
  }
  static async parseFileByType(filePath, type) {
    switch (type) {
      case 'price':
        return this.parsePricesFromFileAndSave(filePath);
      case 'product':
        return this.parseProductFromFile(filePath);
      case 'stock':
        return this.parseStockFromFile(filePath);
      case 'category':
        return this.parseCategoryGroupsFromFile(filePath);
      default:
        console.warn(`!!!!Не відомий тип файлу: ${filePath}`);
        return null;
    }
  }
  
  
  static async parseAllFilesInFolders() {
    const baseDir = path.resolve(__dirname, '../files');
    console.log('🔍 Пошук у папці:', baseDir);
  
    const folders = await fs.readdir(baseDir, { withFileTypes: true });
    console.log('📁 Кількість папок:', folders.length);
  
    for (const folder of folders) {
      if (!folder.isDirectory()) continue;
  
      const folderPath = path.join(baseDir, folder.name);
      const files = await fs.readdir(folderPath, { withFileTypes: true });
  
      for (const file of files) {
        if (!file.isFile()) continue;
  
        const filePath = path.join(folderPath, file.name);
        const type = await this.detectFileType(filePath); // твій метод має повертати тип
  
        console.log(`📄 Файл ${filePath} визначено як тип: ${type}`);
        if(type!=='uknow')await this.parseFileByType(filePath, type); // це має бути функція, яку ти імпортуєш
        // 👉 Тут можна додати збереження або подальшу обробку result
      }
    }
  }

  static async moveImagesToStatic() {
    const baseDir = path.resolve(__dirname, '../files');
    const staticDir = path.resolve(__dirname, '../static');

    await fs.mkdir(staticDir, { recursive: true });

    // Отримуємо список існуючих фото і хешуємо їх
    const staticFiles = await fs.readdir(staticDir);
    const staticHashes = {};

    for (const file of staticFiles) {
      const filePath = path.join(staticDir, file);
      const buffer = await fs.readFile(filePath);
      const hash = crypto.createHash('sha256').update(buffer).digest('hex');
      staticHashes[file] = hash;
    }

    async function recursiveCopyImages(dir) {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          await recursiveCopyImages(fullPath);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (!['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'].includes(ext)) continue;

          try {
            const buffer = await fs.readFile(fullPath);
            const hash = crypto.createHash('sha256').update(buffer).digest('hex');

            // Якщо файл з таким іменем уже існує і має той самий хеш — пропускаємо
            if (staticHashes[entry.name] === hash) {
              console.log(`🔁 Зображення ${entry.name} вже є — пропущено`);
              continue;
            }

            // Якщо такого файлу нема або він інший — копіюємо
            const destPath = path.join(staticDir, entry.name);
            await fs.copyFile(fullPath, destPath);
            staticHashes[entry.name] = hash;

            console.log(`🖼 Зображення ${entry.name} скопійовано в static`);
          } catch (err) {
            console.error(`❌ Помилка при обробці ${entry.name}:`, err);
          }
        }
      }
    }

    await recursiveCopyImages(baseDir);
  }

}

module.exports = ParseController;
