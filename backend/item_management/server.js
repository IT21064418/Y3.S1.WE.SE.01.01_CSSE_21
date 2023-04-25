require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const item_management = require('./routes/itemmanagement');
const config = require('./config');

//express app
const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/itemmanagement',item_management)

//connect to db
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    //listen for requests
    app.listen(config.PORT, () => {
    console.log('connected to db & listening on port',config.PORT);
    }) 
}).catch((error)=>{
    console.log(error)
})

