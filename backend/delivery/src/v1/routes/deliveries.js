const express = require('express');
const { createDelivery, getDeliveries, getDelivery, deleteDelivery, calcDeliveryFee } = require('../controller/delivery');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.post('/v1/deliveries', authenticateUser, createDelivery);
router.get('/v1/deliveries', getDeliveries);
router.get('/v1/deliveries/:id', getDelivery);
router.post('/v1/deliveries/fees', calcDeliveryFee);
router.delete('/v1/deliveries/:id', deleteDelivery);

module.exports = router;