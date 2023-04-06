const Payment = require('../model/payment');
const slugify = require('slugify');

exports.addPayment = async (req, res) => {

    const paymentObj = {

        buyerName: req.body.buyerName,
        shippingAddress: req.body.shippingAddress,
        shippingMethod: req.body.shippingMethod,
        creditCard: req.body.creditCard,
        paymentMethod: req.body.paymentMethod,
        purchasedItems: req.body.purchasedItems

    }
   
    try{
        const newPayment = new Payment(paymentObj);
        const payment = await newPayment.save();
        if(payment){
            return res.status(201).json({ payment });
        }
    } catch (error){
        return res.status(400).json({ error });
    }

};

exports.getPayments = async (req, res) => {

    try {
        const payments = await Payment.find({});
        return res.status(200).json({ payments });
    } catch (error) {
        return res.status(400).json({ error });
    }

};