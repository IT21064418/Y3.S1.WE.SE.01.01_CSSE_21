const express = require('express');
const { addPayment, getPayments, getPayment, deletePayment, SubscribeEvents, getPaymentsByBuyer } = require('../controller/payment');
const { publishDeliveryEvent } = require('../index');
const router = express.Router();

router.post('/v1/payments', async(req, res) => {

    try{
        const paymentObj = {

            buyerId: req.body.buyerId,
            amount: req.body.amount,
            shippingAddress: req.body.shippingAddress,
            shippingMethod: req.body.shippingMethod,
            creditCard: req.body.creditCard,
            paymentMethod: req.body.paymentMethod,
            purchasedItems: req.body.purchasedItems

        } 

        const response = await addPayment(paymentObj);

        return res.status(200).json({ response });
    } catch(error){
        return res.status(500).json({ error });
    }

});

router.get('/v1/payments', async(req, res) => {

    try{
        const response = await getPayments();
        return res.status(200).json({ response });
    }catch(error){
        return error;
    }

});

router.get('/v1/payments/byBuyer/:id', async(req, res) => {

    try{
        let buyerId = req.params.id;

        const response = await getPaymentsByBuyer(buyerId);

        return res.status(200).json({ response });
    } catch(error){
        return res.status(500).json({ error });
    }

});

router.get('/v1/payments/:id', async(req, res) => {

    try{
        let paymentId = req.params.id;

        const response = await getPayment(paymentId);

        return res.status(200).json({ response });
    } catch(error){
        return res.status(500).json({ error });
    }

});

router.delete('/v1/payments/:id', async(req, res) => {

    try{
        let paymentId = req.params.id;

        const response = await deletePayment(paymentId);

        return res.status(200).json({ response });
    } catch(error){
        return res.status(500).json({ error });
    }

});

router.use('/app-events', async (req, res) => {

    const { payload } = req.body;

    SubscribeEvents(payload);

    console.log("===== payment service recevied event =====");
    return res.status(200).json(payload);

});

module.exports = router;