const mongoose = require('mongoose');

const paymentMethods = ['creditCard', 'paypal', 'payhere'];

const paymentSchema = new mongoose.Schema({

    buyerName: {
        type: String,
        required: true,
        trim: true
    },
    shippingAddress: {
        type: String,
        trim: true
    },
    shippingMethod: {
        type: String,
        trim: true
    },
    creditCard: {
        type: {
            cardNumber: String,
            cvcNumber: String,
            cardHolderName: String,
            amount: Number
        },
        required: true
    },
    paymentMethod: {
        type: String,
        enum: paymentMethods,
        required: true
    },
    purchasedItems: {
        type: [
            {
                name: String,
                price: Number,
                quantity: Number
            }
        ],
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Payment', paymentSchema);