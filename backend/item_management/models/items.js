const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemschema = new Schema({
    product_name:{
        type: String,
        required : true
    },
    product_description:{
        type: String,
        required : true
    },
    product_features:{
        type: String,
        required : true
    },
    product_price:{
        type: Number,
        required : true
    },
    shipping_information:{
        type: String,
        required : true
    },
    return_policy:{
        type: String,
        required : true
    },
    Warranty_Information:{
        type: String,
        required : true
    }
}, {timestamps:true})

module.exports=mongoose.model('items',itemschema)