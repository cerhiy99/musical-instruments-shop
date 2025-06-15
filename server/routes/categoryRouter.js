const CategoryController = require('../Controllers/CategoryController');

const router = require('express')();

router.get('/get', CategoryController.GetAll);
router.get('/get/:categoryFather', CategoryController.GetFromCategory);

module.exports = router;
