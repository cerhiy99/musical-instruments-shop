const ErrorApi = require('../error/ErrorApi');
const { Product, ProductPrice, Category } = require('../models/models');

class ProductController {
  static GetListProduct = async (req, resp, next) => {
    try {
      const { limit = 20, page = 1 } = req.query;
      const offset = (page - 1) * limit;

      const products = await Product.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
        include: [
          {
            model: ProductPrice,
            as: 'prices',
            required: false,
          },
        ],
        order: [['createdAt', 'DESC']],
      });

      return resp.json({
        count: products.count,
        rows: products.rows,
      });
    } catch (err) {
      return next(ErrorApi.badRequest(err.message));
    }
  };

  static GetForId = async (req, resp, next) => {
    try {
      const { id } = req.query;
      console.log(id);
      if (!id) {
        return next(ErrorApi.badRequest('Не передано ID товару'));
      }

      const product = await Product.findOne({
        where: { id },
        include: [
          {
            model: ProductPrice,
            as: 'prices',
            required: false,
          },
        ],
      });

      if (!product) {
        return next(ErrorApi.notFound('Товар не знайдено'));
      }

      return resp.json(product);
    } catch (err) {
      return next(ErrorApi.badRequest(err.message));
    }
  };
  static GetForCategoryId = async (req, resp, next) => {
    try {
      const { categoryId } = req.params;
      const res = await Product.findAll({ where: { categoryId } });
      return resp.json({ res });
    } catch (err) {
      return next(ErrorApi.badRequest(err));
    }
  };
}

module.exports = ProductController;

/*
static GetListProduct = async (req, resp, next) => {
        try {
          const { limit = 20, page = 1 } = req.query;
          const offset = (page - 1) * limit;
      
          // Отримуємо всі товари з цінами
          const allProducts = await Product.findAll({
            include: [
              {
                model: ProductPrice,
                as: 'prices',
                required: false,
              }
            ],
            order: [['createdAt', 'DESC']]
          });
      
          const filtered = allProducts.filter(product => {
            if (!product.image) return false;
          
            const imageName = product.image.split('/').pop(); // лише назва файлу
            const imagePath = path.resolve(__dirname, '..', 'static', imageName);
          
            return fs.existsSync(imagePath); // тільки якщо файл реально існує
          });
                
          // Пагінація вже після фільтрації
          const paginated = filtered.slice(offset, offset + Number(limit));
      
          // Формуємо відповідь
          const result = paginated.map(p => ({
            id: p.id,
            article: p.article,
            code: p.code,
            name_uk: p.name_uk,
            name_ru: p.name_ru,
            name_en: p.name_en,
            description_uk: p.description_uk,
            description_ru: p.description_ru,
            description_en: p.description_en,
            image: p.image,
            type: p.type,
            kind: p.kind,
            categoryId: p.categoryId,
            createdAt: p.createdAt,
            updatedAt: p.updatedAt,
            prices: p.prices
          }));
      
          return resp.json({
            count: filtered.length,
            rows: result
          });
        } catch (err) {
          return next(ErrorApi.badRequest(err.message));
        }
      };
    */
