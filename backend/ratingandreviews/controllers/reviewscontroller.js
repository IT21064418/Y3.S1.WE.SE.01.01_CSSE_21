const Review = require('../models/ratingre');
const mongoose = require('mongoose');
const { connect, sendMessage } = require('../utils/amqpServer');

//get all 
const getallreview = async(req,res) =>{
    const aOptions = [
     { $lookup: {
        from : "items",
        localField : "productID",
        foreignField : "_id",
        as: "product"
      }}
    ];

    const reviews = await Review.aggregate(aOptions).exec();

    res.status(200).json(reviews)
}

// //get single
const getreview = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Data'})
    }

    const review = await Review.findById(id)

    if(!review){
        return res.status(404).json({error: 'No such Data'})
    }
    res.status(200).json(review)
}


// //create new
const createreview = async (req,res) =>{
    const {productID, review_title,rating,Description} = req.body

    try{
        const review = await Review.create({productID ,review_title, rating, Description})
        const itemReview = {
          review_title: review.review_title,
          rating: review.rating,
          Description: review.Description
        }

        const payload = { productID, itemReview };
        console.log(payload);
        prepForQueue("ITEMS",payload);

        res.status(200).json(review)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete
const deletereview = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such Data'})
    }
  
    const review = await Review.findOneAndDelete({_id: id})
  
    if(!review) {
      return res.status(400).json({error: 'No such Data'})
    }
  
    res.status(200).json(review)
}

// update
const updatereview = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such Data'})
    }
  
    const review = await Review.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!review) {
      return res.status(400).json({error: 'No such Data'})
    }
  
    res.status(200).json(review)
}

//prepare the payload to send to queue
async function prepForQueue(queueName, payload) {

  console.log(queueName, payload);

  try{
      sendMessage(queueName, payload);
  }catch(error){
      console.log(error);
  }

}

module.exports = {
    createreview,
    getallreview,
    getreview,
    deletereview,
    updatereview,
}