const express = require('express');
const { addPayment,getPayments } = require('../controller/payment');
const router = express.Router();

router.post('/v1/payments', addPayment);
router.get('/v1/payments', getPayments);

module.exports = router;