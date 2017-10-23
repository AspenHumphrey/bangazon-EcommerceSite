'use strict';

const { Router } = require('express');
const router = Router();

const { getProduct } = require('../controllers/productCtrl');

router.get('/home', getProduct);

module.exports = router;