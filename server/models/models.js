const { DataTypes, Sequelize } = require('sequelize'); // Імпортуємо DataTypes
const sequelize = require('../db'); // Імпортуємо ваш екземпляр sequelize

const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: true,
    }
  }, {
    tableName: 'Categories',
    timestamps: true,
  });
  
// Асоціації — потрібно викликати після ініціалізації всіх моделей
Category.associate = (models) => {
    Category.hasMany(models.Category, {
        foreignKey: 'parentId',
        as: 'children'
    });

    Category.belongsTo(models.Category, {
        foreignKey: 'parentId',
        as: 'parent'
    });
};

const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    article: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_uk: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_ru: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_en: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description_uk: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description_ru: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description_en: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kind: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  }, {
    tableName: 'Products',
    timestamps: true,
  });
  
  // Ціни для продуктів
  const ProductPrice = sequelize.define('ProductPrice', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    discount: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 0.00,
    },
    priceWithDiscount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'UAH',
    },
  }, {
    tableName: 'ProductPrices',
    timestamps: false,
  });
  
  // Залишок продукту (кількість)
  const ProductQuantity = sequelize.define('ProductQuantity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'ProductQuantities',
    timestamps: false,
  });
  
  // Асоціації
  
  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  
    Product.hasMany(models.ProductPrice, {
      foreignKey: 'productId',
      as: 'prices',
    });
  
    Product.hasMany(models.ProductQuantity, {
      foreignKey: 'productId',
      as: 'quantities',
    });
  };
  
  ProductPrice.associate = (models) => {
    ProductPrice.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product',
    });
  };
  
  ProductQuantity.associate = (models) => {
    ProductQuantity.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product',
    });
  };

// Встановити звʼязок один-до-багатьох (Product має багато ProductPrice)
Product.hasMany(ProductPrice, { foreignKey: 'productId', as: 'prices' });
ProductPrice.belongsTo(Product, { foreignKey: 'productId' });
  
module.exports = {
    Category,
    Product,
    ProductPrice,
    ProductQuantity,
};
