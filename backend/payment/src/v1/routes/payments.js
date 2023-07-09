const express = require('express');
const { addPayment, getPayments, getPayment, deletePayment } = require('../controller/payment'); //impoert functions from the controller
const { authenticateUser } = require('../middlewares/auth'); //import authentication function
const router = express.Router();

router.post('/v1/payments', addPayment); //create payment route, removed authentication for developing 
router.get('/v1/payments', getPayments); //get all payments route
router.get('/v1/payments/:id', getPayment); //get payment by id route
router.delete('/v1/payments/:id', deletePayment); // delete payment route

//exports routes
module.exports = router;