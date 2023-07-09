require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const item_management = require('./routes/itemmanagement');
const config = require('./config');
const amqpServer = require('./utils/amqpServer');

//express app
const app = express();

//middleware
app.use(express.json())
app.use(cors());

//rabbitMq server
amqpServer.connect().then(() => {
    amqpServer.consumefromQueue(); 
});

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

