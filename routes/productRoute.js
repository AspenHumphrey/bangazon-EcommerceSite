'use strict';

const { Router } = require('express');
const router = Router();

const { getProductHome, getProductDetail, getAllProductsInCategory, getSearchProduct } = require('../controllers/productCtrl');

// home- 20 products
router.get('/home', getProductHome);
// gets one products details
router.get('/productDetail/:id', getProductDetail);
// lists all of the products in a category by the categoryId
router.get('/allProductsInCategory/:id', getAllProductsInCategory);
// gets all products on key word search
router.post('/search', getSearchProduct);


module.exports = router;