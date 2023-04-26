const Delivery = require('../model/delivery');

exports.updateDelivery = async (deliveryId, deliveryStatus) => {

    console.log('in update delivery');
    console.log(deliveryId, deliveryStatus);

    try{
        const delivery = await Delivery.findById(deliveryId);

        if(!delivery) {
            console.log('Delivery not found');
            return 'Delivery not found';
        }

        delivery.deliveryStatus = deliveryStatus;

        const updatedDelivery = await Delivery.updateOne({_id: deliveryId}, { $set: { deliveryStatus: deliveryStatus }});

        if(!updatedDelivery){
            console.log('failed to updaet delivery');
            return 'No such data';
        }

        console.log(updatedDelivery);
        return updatedDelivery;

    }catch(error){
        console.log(error);
        return error;
    }

}