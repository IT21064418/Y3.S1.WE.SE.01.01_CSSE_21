const mongoose = require('mongoose');
const amqp = require('amqplib');
const Delivery = require('../model/delivery');
const { connect, sendMessage } = require('../utils/amqpServer');

//validate deliveries 
function validateDelivery(delivery){

    let errors = [];

    if(delivery.orderedItems.length <= 0){
        errors.push("Amount of ordered items should be greater than 0.")
    } else {
        delivery.orderedItems.forEach(item => {
            //check for invalid item quantities
            if (item.quantity <= 0){
                errors.push("Quantity of "+ item.name +" should be greater than 0."); //push error to the errors array
            }
            //check for invalid item weights
            if (item.weight <= 0){
                errors.push("Weight of "+ item.name +" should be greater than 0.");
            }
        });
    }
    
    //check for invalid delivery fees
    if(delivery.deliveryFee < 0){
        errors.push("delivery fee should be greater than or equal to 0.")
    }

    //check if the error array is empty
    if (errors.length > 0){
        return errors; //return errors
    } else {
        return true;
    }

}

//calculate delivery fees for each delivery service
exports.calcDeliveryFee = (req, res) => {

    const deliveryServices = [
        { service:'ups', feePerKg:20 },
        { service:'fedex', feePerKg:10 },
        { service:'dhl', feePerKg:18 },
    ];

    const orderedItems = req.body.orderedItems;

    let totalWeight = 0;
    let deliveryFees = [];

    //calculate total weiight
    orderedItems.forEach(item => {

        totalWeight += item.quantity * item.weight;
        
    });
    
    //calculate delivery fees for each service
    deliveryServices.forEach(({ service, feePerKg }) => {
        
        const deliveryFee = totalWeight * feePerKg;
        deliveryFees.push({ service, deliveryFee });

    });

    res.json({ weight: totalWeight, fees: deliveryFees}); //return weight and delivery fees

}

//create a delivery in database
exports.createDelivery = async (req, res) => {

    const userId = req.user;

    const deliveryObj = {

        buyerId: req.body.buyerId,
        orderedItems: req.body.orderedItems,
        totalWeight: req.body.totalWeight,
        deliveryService: req.body.deliveryService,
        deliveryAddress: req.body.deliveryAddress,
        deliveryDate: req.body.deliveryDate,
        deliveryFee: req.body.deliveryFee,
        deliveryStatus: req.body.deliveryStatus

    }

    let valid = validateDelivery(deliveryObj); //validate delivery

    if(valid === true){
        try{
            const newDelivery = new Delivery(deliveryObj);
            const delivery = await newDelivery.save();

            const userDelivery = {
                deliveryId: delivery._id,
                orderedItems: delivery.orderedItems,
                deliveryAddress: delivery.deliveryAddress,
                deliveryDate: delivery.deliveryDate,
                deliveryService: delivery.deliveryService,
                deliveryStatus: delivery.deliveryStatus
            }

            const payload = { userId, userDelivery}; //cinstruct a payload to send to the USER queue
            console.log(payload);
            prepForQueue("USER",payload);

            if(delivery){
                return res.status(201).json({ delivery });
            }
        }catch(error){
            return res.status(400).json({ error });
        }
    }else {
        return res.status(402).json({ valid });
    }

}

//get all deliveries
exports.getDeliveries = async (req, res) => {

    try {
        const deliveries = await Delivery.find({});
        return res.status(200).json({ deliveries });
    } catch (error) {
        return res.status(400).json({ error });
    }

};

//get delivery by id
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

//delete delivery
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

//prepare the payload for queue
async function prepForQueue(queueName, payload) {

    console.log(queueName, payload);

    try{
        sendMessage(queueName, payload) //send the payload and the name of the queue where payload should be sent to the sendMessage function
    }catch(error){
        console.log(error);
    }

}