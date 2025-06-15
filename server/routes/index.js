const router = require('express')();

const productRouter=require('./productRouter');
const categoryRouter=require('./categoryRouter');

router.use('/product',productRouter);
router.use('/category',categoryRouter);


module.exports = router;
