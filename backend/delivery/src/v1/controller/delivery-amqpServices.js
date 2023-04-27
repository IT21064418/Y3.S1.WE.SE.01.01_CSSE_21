const Delivery = require('../model/delivery');

//update delivery status function
exports.updateDelivery = async (deliveryId, deliveryStatus) => {

    console.log('in update delivery');
    console.log(deliveryId, deliveryStatus);

    try{
        const delivery = await Delivery.findById(deliveryId);//get the delivery by id

        //check wheter the delivery exsists
        if(!delivery) {
            console.log('Delivery not found');
            return 'Delivery not found';
        }

        //assign the delivery status of the delivery object to the delivery status recieved by the function
        delivery.deliveryStatus = deliveryStatus;

        //update delivery
        const updatedDelivery = await Delivery.updateOne({_id: deliveryId}, { $set: { deliveryStatus: deliveryStatus }});

        //check whether the update succesfull
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