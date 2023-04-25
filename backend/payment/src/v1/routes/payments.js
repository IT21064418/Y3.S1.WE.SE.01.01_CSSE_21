const express = require('express');
const { addPayment, getPayments, getPayment, deletePayment } = require('../controller/payment');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.post('/v1/payments',authenticateUser, addPayment);
router.get('/v1/payments', getPayments);
router.get('/v1/payments/:id', getPayment);
router.delete('/v1/payments/:id', deletePayment);

module.exports = router;