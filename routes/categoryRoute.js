'use strict';

const { Router } = require('express');
const router = Router();

const { getAllCategoriesWithThreeProducts, getCategory } = require('../controllers/categoryCtrl');

// all Categories will be shown at all times like a nav bar 
router.get('/allCategoriesWithThreeProducts', getAllCategoriesWithThreeProducts);
// this will be called when one of those categories from the list from all cat with three
// products is clicked
// will need an event listener on that func in the pug template
router.get('/getCategory/:id', getCategory);

module.exports = router;