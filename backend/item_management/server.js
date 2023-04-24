require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const item_management = require('./routes/itemmanagement')

//express app
const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/itemmanagement',item_management)

//connect to db
mongoose.connect('mongodb+srv://it21064418:it21064418@dscluster.qczuvg7.mongodb.net/DS_Project?retryWrites=true&w=majority')
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port',process.env.PORT);
    }) 
})
.catch((error)=>{
    console.log(error)
})

