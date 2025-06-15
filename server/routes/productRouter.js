const ProductController = require('../Controllers/ProductController');

const router = require('express')();

router.get('/getList', ProductController.GetListProduct);
router.get('/getForId', ProductController.GetForId);
router.get('/getForCategory/:categoryId', ProductController.GetForCategoryId);

module.exports = router;
