const mongoose = require('mongoose');
const Delivery = require('../model/delivery');

exports.calcDeliveryFee = (req, res) => {

    const deliveryServices = [
        { service:'ups', feePerKg:20 },
        { service:'fedex', feePerKg:10 },
        { service:'dhl', feePerKg:18 },
    ];

    const orderedItems = req.body.orderedItems;

    let totalWeight = 0;
    let deliveryFees = [];

    orderedItems.forEach(item => {

        totalWeight += item.quantity * item.weight;
        
    });
    
    deliveryServices.forEach(({ service, feePerKg }) => {
        
        const deliveryFee = totalWeight * feePerKg;
        deliveryFees.push({ service, deliveryFee });

    });

    res.json({ weight: totalWeight, fees: deliveryFees});

}

exports.createDelivery = async (req, res) => {

    const deliveryObj = {

        orderId: new mongoose.Types.ObjectId(),
        orderedItems: req.body.orderedItems,
        totalWeight: req.body.totalWeight,
        deliveryService: req.body.deliveryService,
        deliveryAddress: req.body.deliveryAddress,
        deliveryDate: req.body.deliveryDate,
        deliveryFee: req.body.deliveryFee,
        deliveryStatus: req.body.deliveryStatus

    }

    try{
        const newDelivery = new Delivery(deliveryObj);
        const delivery = await newDelivery.save();

        if(delivery){
            return res.status(201).json({ delivery });
        }
    }catch(error){
        return res.status(400).json({ error });
    }

}

exports.getDeliveries = async (req, res) => {

    try {
        const deliveries = await Delivery.find({});
        return res.status(200).json({ deliveries });
    } catch (error) {
        return res.status(400).json({ error });
    }

};

exports.getDelivery = async (req, res) => {

    try{
        let deliveryId = req.params.id;
        const delivery = await Delivery.findById(deliveryId);

        if (!delivery) {
            return res.status(404).json({ message: 'Delivery not found' });
        }

        return res.status(200).json({ delivery });
    } catch (error){
        return res.status(400).json({ error });
    }
    
};

exports.deleteDelivery = async (req, res) => {

    try{
        let deliveryId = req.params.id;
        await Delivery.findByIdAndDelete(deliveryId).then(() => {
            return res.status(200).json("Delivery Deleted");
        });
     }catch (error){
        return res.status(400).json({ error });
    }

}