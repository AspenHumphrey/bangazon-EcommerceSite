'use strict';

const { Router } = require('express');
const router = Router();

const { getProduct, getProductDetail, getAllProductsInCategory } = require('../controllers/productCtrl');

router.get('/home', getProduct);
router.get('/productDetail/:id', getProductDetail);
router.get('/allProductsInCategory/:id', getAllProductsInCategory);

module.exports = router;