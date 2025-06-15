const ErrorApi = require('../error/ErrorApi');
const { Category } = require('../models/models');

class CategoryController {
  static GetAll = async (req, resp, next) => {
    try {
      const categories = await Category.findAll({ raw: true });

      // Створимо об'єкт для швидкого доступу по id
      const categoryMap = {};

      // Додамо поле children до кожної категорії
      categories.forEach(cat => {
        categoryMap[cat.id] = { ...cat, children: [] };
      });

      const tree = [];

      categories.forEach(cat => {
        if (cat.parentId && categoryMap[cat.parentId]) {
          // Якщо є parentId, додаємо в children відповідного батька
          categoryMap[cat.parentId].children.push(categoryMap[cat.id]);
        } else {
          // Якщо немає parentId — це корінь
          tree.push(categoryMap[cat.id]);
        }
      });

      return resp.json({ res: tree });
    } catch (err) {
      return next(ErrorApi.badRequest(err));
    }
  };
  static GetFromCategory = async (req, resp, next) => {
    try {
      const { categoryFather } = req.params;

      if (!categoryFather) {
        return next(ErrorApi.badRequest('Не передано categoryFather'));
      }

      const allCategories = await Category.findAll({ raw: true });

      const categoryMap = {};
      allCategories.forEach(cat => {
        categoryMap[cat.id] = { ...cat, children: [] };
      });

      allCategories.forEach(cat => {
        if (cat.parentId && categoryMap[cat.parentId]) {
          categoryMap[cat.parentId].children.push(categoryMap[cat.id]);
        }
      });

      const result = categoryMap[categoryFather];

      if (!result) {
        return next(ErrorApi.badRequest('Категорію не знайдено'));
      }

      return resp.json({ res: result });
    } catch (err) {
      return next(ErrorApi.badRequest(err));
    }
  };
}

module.exports = CategoryController;
