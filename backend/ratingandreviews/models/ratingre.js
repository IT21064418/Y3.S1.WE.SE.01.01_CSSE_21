const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewschema = new Schema({
    review_title:{
        type: String,
        required : true
    },
    rating:{
        type: Number,
        required : true
    },
    Description:{
        type: String,
        required : true
    }
}, {timestamps:true})

module.exports=mongoose.model('review',reviewschema)