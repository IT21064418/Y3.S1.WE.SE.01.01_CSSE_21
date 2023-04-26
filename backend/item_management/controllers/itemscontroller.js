const Item = require('../models/items')
const mongoose = require('mongoose')

//get all 
const getallitems = async(req,res) =>{
    const item = await Item.find({}).sort({createdAt:-1})

    res.status(200).json(item)
}

// //get single
const getitem = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Data'})
    }

    const item = await Item.findById(id)

    if(!item){
        return res.status(404).json({error: 'No such Data'})
    }
    res.status(200).json(item)
}

//create new
const createitem = async (req,res) =>{
    const {product_name,product_description,product_features,product_price,shipping_information,return_policy,Warranty_Information} = req.body

    try{
        const item = await Item.create({product_name,product_description,product_features,product_price,shipping_information,return_policy,Warranty_Information})
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete
const deleteitem = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such Data'})
    }
  
    const item = await Item.findOneAndDelete({_id: id})
  
    if(!item) {
      return res.status(400).json({error: 'No such Data'})
    }
  
    res.status(200).json(item)
  }

  // update
const updateitem = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such Data'})
    }
  
    const item = await Item.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!item) {
      return res.status(400).json({error: 'No such Data'})
    }
  
    res.status(200).json(item)
  }

const addReview = async (productID, itemReview) => {
  try{
    const item = await Item.findById(productID);

    if(!item){
      console.log("Product not found");
      return 'Product not found';
    }

    console.log(itemReview);

    item.reviews.push(itemReview);

    await item.save();

    console.log(`Review added to product ${productID}`);
    return `Review added to product ${productID}`;
  } catch(error){
    console.log(error);
    return error;
  }
}

module.exports = {
    createitem,
    getallitems,
    getitem,
    deleteitem,
    updateitem,
    addReview
}