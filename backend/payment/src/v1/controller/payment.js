const Payment = require('../model/payment');
const slugify = require('slugify');

exports.addPayment = async (paymentObj) => {

    try{
        const newPayment = new Payment(paymentObj);
        const payment = await newPayment.save();
        if(payment){
            return payment;
        }
    } catch (error){
        return error;
    }

};

exports.getPayments = async () => {

    try {
        const payments = await Payment.find({});
        return payments;
    } catch (error) {
        return error;
    }

};

exports.getPaymentsByBuyer = async (buyersId) => {

    try{
        const payments = await Payment.find({buyerId: `${buyersId}`});

        if(!payments){
            return 'No payments done by the buyer'
        }

        return payments;
    } catch(error){
        return error;
    }

}

exports.getPayment = async (paymentId) => {

    try{
        const payment = await Payment.findById(paymentId);
        return payment;
    } catch (error){
        return error;
    }
    
};

exports.deletePayment = async (paymentId) => {

    try{
        const payment = await Payment.findByIdAndDelete(paymentId)

        if(!payment) {
            return 'Payment not Found';
        } else{
            return 'Payment deleted';
        }

     }catch (error){
        return error;
    }

}

exports.SubscribeEvents = async (payload) => {

    const { event, data } = payload;

    const { paymentId } = data;

    switch(event){
        case 'GET_PAYMENT':
            this.getPayment(paymentId);
            break;
        case 'TESTING':
            console.log("Working subscriber......")
        default:
            break;
    }

}