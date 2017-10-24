'use strict';

const { Router } = require('express');
const router = Router();

const { getAllCategories, getCategory } = require('../controllers/categoryCtrl');

// all Categories will be shown at all times like a nav bar 
router.get('/allCategories', getAllCategories);
// this will be called when one of those categories in the nav bar is clicked
// will need an event listener on that func in the pug template
router.get('/getCategory/:id', getCategory);

module.exports = router;