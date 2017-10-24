'use strict';

const { Router } = require('express');
const router = Router();

const { getAllCategories, getCategory } = require('../controllers/categoryCtrl');

router.get('/allCategories', getAllCategories);
router.get('/getCategory/:id', getCategory);

module.exports = router;