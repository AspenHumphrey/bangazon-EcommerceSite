'use strict';

const { Router } = require('express');
const router = Router();

const { getProductHome, getProductDetail, getAllProductsInCategory } = require('../controllers/productCtrl');

// home- 20 products
router.get('/home', getProductHome);
// gets one products details
router.get('/productDetail/:id', getProductDetail);
// lists all of the products in a category by the categoryId
router.get('/allProductsInCategory/:id', getAllProductsInCategory);

module.exports = router;