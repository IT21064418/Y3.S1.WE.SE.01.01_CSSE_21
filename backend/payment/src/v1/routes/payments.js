const express = require('express');
const { addPayment, getPayments, getPayment, deletePayment } = require('../controller/payment');
const router = express.Router();

router.post('/v1/payments', addPayment);
router.get('/v1/payments', getPayments);
router.get('/v1/payments/:id', getPayment);
router.delete('/v1/payments/:id', deletePayment);

module.exports = router;