'use strict';

const { Router } = require('express');
const router = Router();

const { getProductHome, getProductDetail, getAllProductsInCategory, getThreeProductsAndCategory } = require('../controllers/productCtrl');

router.get('/home', getProductHome);
router.get('/productDetail/:id', getProductDetail);
router.get('/allProductsInCategory/:id', getAllProductsInCategory);
router.get('/threeProductCategory/:id', getThreeProductsAndCategory);

module.exports = router;