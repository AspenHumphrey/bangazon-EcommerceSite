'use strict';

const { Router } = require('express');
const router = Router();

const { getUserAccount } = require('../controllers/userCtrl');

router.get('/viewAccount/:id', getUserAccount);

module.exports = router;