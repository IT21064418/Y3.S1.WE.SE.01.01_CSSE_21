const mongoose = require('mongoose');
const Delivery = require('../model/delivery');

function validateDelivery(delivery){

    let errors = [];

    if(delivery.orderedItems.length <= 0){
        errors.push("Amount of ordered items should be greater than 0.")
    } else {
        delivery.orderedItems.forEach(item => {
            if (item.quantity <= 0){
                errors.push("Quantity of "+ item.name +" should be greater than 0.");
            }
    
            if (item.weight <= 0){
                errors.push("Weight of "+ item.name +" should be greater than 0.");
            }
        });
    }
    
    if(delivery.deliveryFee < 0){
        errors.push("delivery fee should be greater than or equal to 0.")
    }

    if (errors.length > 0){
        return errors;
    } else {
        return true;
    }

}

exports.calcDeliveryFee = async (orderedItems) => {

    const deliveryServices = [
        { service:'ups', feePerKg:20 },
        { service:'fedex', feePerKg:10 },
        { service:'dhl', feePerKg:18 },
    ];

    let totalWeight = 0;
    let deliveryFees = [];

    orderedItems.forEach(item => {

        totalWeight += item.quantity * item.weight;
        
    });
    
    deliveryServices.forEach(({ service, feePerKg }) => {
        
        const deliveryFee = totalWeight * feePerKg;
        deliveryFees.push({ service, deliveryFee });

    });

    const deliveryFee = [
        { weight: totalWeight},
        {fees: deliveryFees}
    ];

    return deliveryFee;

}

exports.createDelivery = async (deliveryObj) => {

    let valid = validateDelivery(deliveryObj);

    if(valid === true){
        try{
            const newDelivery = new Delivery(deliveryObj);
            const delivery = await newDelivery.save();
    
            if(delivery){
                return  delivery;
            }
        }catch(error){
            return error;
        }
    }else {
        return valid;
    }

}

exports.getDeliveries = async () => {

    try {
        const deliveries = await Delivery.find({});
        return deliveries;
    } catch (error) {
        return error;
    }

};

exports.getDelivery = async (deliveryId) => {

    try{
        const delivery = await Delivery.findById(deliveryId);

        if (!delivery) {
            // return res.status(404).json({ message: 'Delivery not found' });
            return 'Delivery not found';
        }

        return delivery;
    } catch (error){
        return error;
    }
    
};

exports.getDeliveriesByBuyer = async (buyerId) => {

    try{
        const deliveries = await Delivery.find({buyerId: `${buyerId}`});

        if (!deliveries) {
            return 'No deliveries for buyer';
        }

        return deliveries;
    } catch(error){
        return error;
    }

}

exports.deleteDelivery = async (deliveryId) => {

    try{
        const delivery = await Delivery.findByIdAndDelete(deliveryId);

        if(!delivery) {
            return 'Delivery not Found';
        }

        return delivery;
     }catch (error){
        return error;
    }

}

exports.getDeliveryStatus = async (deliveryId) => {

    try{
        const delivery = this.getDelivery(deliveryId);
        deliveryStatus = delivery.deliveryStatus;

        console.log(deliveryStatus);
        return deliveryStatus;
    } catch(error){
        return error;
    }

}

exports.SubscribeEvents = async (payload) => {

    const { event, data } = payload;

    const {deliveryId, deliveryStatus, orderedItems} = data;

    switch(event){
        case 'GET_DELIVERY_FEES':
            this.calcDeliveryFee(orderedItems);
            break;
        case 'GET_DELIVERY_STATUS':
            this.getDeliveryStatus(deliveryId);
            break;
        case 'TESTING':
            console.log("Working subscriber......");
        default:
            break;
    }

}