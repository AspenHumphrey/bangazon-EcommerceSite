'use strict';

const { Router } = require('express');
const router = Router();

const { getUserAccount, getOneUser, getUpdateUser } = require('../controllers/userCtrl');
const { getUpdatePayment } = require('../controllers/paymentTypeCtrl');

router.get('/viewAccount/:id', getUserAccount);
router.get('/oneUser/:id', getOneUser);
// update should be a put not a post. will need to edit route should just be user
router.post('/update-user/:id', getUpdatePayment, getUpdateUser);

module.exports = router;