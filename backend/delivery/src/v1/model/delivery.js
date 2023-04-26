const mongoose = require('mongoose');

const deliveryStatus = ['pending', 'confirmed', 'dispatched', 'delivered'];
const deliveryServices = ['ups','fedex','dhl'];

const deliverySchema = new mongoose.Schema({

    deliveryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Delivery',
        required: true
    },
    buyerId: {
        type: String,
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
    totalWeight: {
        type: Number,
        required: true
    },
    deliveryService: {
        type: String,
        enum: deliveryServices,
        required: true
    },
    deliveryAddress: {
        type: String,
        trim: true,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    deliveryFee: {
        type: Number,
        required: true
    },
    deliveryStatus: {
        type: String,
        enum: deliveryStatus,
        default: 'pending'
    }

}, {timestamps: true});

module.exports = mongoose.model('Delivery',deliverySchema);