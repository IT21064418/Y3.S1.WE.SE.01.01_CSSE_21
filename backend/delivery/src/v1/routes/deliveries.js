const express = require('express');
const mongoose = require('mongoose');
const { createDelivery, getDeliveries, getDelivery, deleteDelivery, calcDeliveryFee, SubscribeEvents, getDeliveriesByBuyer } = require('../controller/delivery');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.post('/v1/deliveries', async (req, res) => {
    try{
        const deliveryObj = {
            
            deliveryId: new mongoose.Types.ObjectId,
            buyerId: req.body.buyerId,
            orderedItems: req.body.orderedItems,
            totalWeight: req.body.totalWeight,
            deliveryService: req.body.deliveryService,
            deliveryAddress: req.body.deliveryAddress,
            deliveryDate: req.body.deliveryDate,
            deliveryFee: req.body.deliveryFee,
            deliveryStatus: req.body.deliveryStatus

        }

        const response = await createDelivery(deliveryObj);

        return res.json({ response });
    } catch(error){
        return res.status(500).json({ error });
    }
});

router.get('/v1/deliveries', async (req, res) => {
    try{
        const response = await getDeliveries();

        return res.status(200).json({ response });
    } catch(error){
        return res.status(400).json({ error });
    }
});

router.get('/v1/deliveries/:id', async (req, res) => {
    try{
        const deliveryId = req.params.id;

        const response = await getDelivery(deliveryId);

        return res.status(200).json({ response });
    } catch (error){
        return res.status(400),json({ error });
    }
});

router.get('/v1/deliveries/byBuyer/:id',authenticateUser, async (req, res) => {

    try{
        const buyerId = req.user;

        const response = await getDeliveriesByBuyer(buyerId);

        return res.status(200).json({ response });
    } catch (error){
        console.log(error);
        return res.status(400).json({ error });
    }

});

router.post('/v1/deliveries/fees', async (req, res) => {
    try{
        const orderedItems = req.body.orderedItems;

        const response = await calcDeliveryFee(orderedItems);

        return res.status(200).json({ response });
    } catch(error){
        return res.status(500).json({ error });
    }
});

router.delete('/v1/deliveries/:id', async (req, res) => {
    try{
        const deliveryId = req.params.id;

        const response = await deleteDelivery(deliveryId);

        return res.status(200).json({ response });
    } catch (error){
        return res.status(400),json({ error });
    }
});

router.use('/app-events', async (req, res) => {

    const { payload } = req.body;

    SubscribeEvents(payload);

    console.log("===== delivery service recevied event =====");
    return res.status(200).json(payload);

});

module.exports = router;