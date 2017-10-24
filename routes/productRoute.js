'use strict';

const { Router } = require('express');
const router = Router();

const { getProductHome, getProductDetail, getAllProductsInCategory, getThreeProductsAndCategory } = require('../controllers/productCtrl');

// home- 20 products
router.get('/home', getProductHome);
// gets one products details
router.get('/productDetail/:id', getProductDetail);
// lists all of the products in a category by the categoryId
router.get('/allProductsInCategory/:id', getAllProductsInCategory);
// lists three of the products by desc date by categoryId
router.get('/threeProductCategory/:id', getThreeProductsAndCategory);

module.exports = router;