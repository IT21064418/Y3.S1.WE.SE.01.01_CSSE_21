const mongoose = require('mongoose');

const deliveryStatus = ['pending', 'processing', 'accepted'];
const deliveryServices = ['ups','fedex','dhl'];

const deliverySchema = new mongoose.Schema({

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