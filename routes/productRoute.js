'use strict';

const { Router } = require('express');
const router = Router();

const { getProduct, getProductDetail } = require('../controllers/productCtrl');

router.get('/home', getProduct);
router.get('/productDetail/:id', getProductDetail);

module.exports = router;