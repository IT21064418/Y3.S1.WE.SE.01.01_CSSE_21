const express = require('express');
const { createDelivery, getDeliveries, getDelivery, deleteDelivery, calcDeliveryFee } = require('../controller/delivery');//import delivery controller functions
const { authenticateUser } = require('../middlewares/auth'); //import authentication function
const router = express.Router();

router.post('/v1/deliveries', createDelivery);//create delivery route, removed authentication for development purposes
router.get('/v1/deliveries', getDeliveries);//get all deliveries route
router.get('/v1/deliveries/:id', getDelivery);//get delivery by id route
router.post('/v1/deliveries/fees', calcDeliveryFee);//calculate deliveryFee route
router.delete('/v1/deliveries/:id', deleteDelivery);//delete delivery route

module.exports = router;