const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderedItems: {
        type: [
            {
                name: String,
                price: Number,
                quantity: Number,
                weight: Number
            }
        ],
        required: true
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    buyerEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    deliveryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Delivery',
        required: true
    },
    deliveryService: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        trim: true,
        required: true
    },
    deliveryStatus: {
        type: String,
        default: 'pending',
        required: true
    }
}, {timestamps: true});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;