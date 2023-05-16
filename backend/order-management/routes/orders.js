const express = require('express');
const { authenticateUser } = require('../middleware/auth');
const { createOrder, getOrders, getOrder, updateOrder, deleteOrder } = require('../controller/order');

const router = express.Router();

//create order
router.post('/orders', authenticateUser, createOrder);
//get all orders
router.get('/orders', getOrders);
//get order by id
router.get('/orders/:id', getOrder);
//delete order
router.delete('/orders/:id', authenticateUser, deleteOrder);
//update order
router.put('/orders/:id', authenticateUser, updateOrder);

module.exports = router