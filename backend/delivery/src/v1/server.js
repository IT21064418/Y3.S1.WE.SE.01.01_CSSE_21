const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const config = require('./config'); //imporitng MONGODB_URI, PORT
const amqpServer = require('./utils/amqpServer'); //importing amqp servers functions

const app = express();

app.use(bodyParser.json());
app.use(cors());

//routes
const deliveryRoutes = require('./routes/deliveries');

app.use('/api', deliveryRoutes);

//rabbitmq connection
amqpServer.connect().then(() => {
    amqpServer.consumefromQueue();
});

//mongoDB connection
mongoose.set('strictQuery', false);

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((err) => console.log('DB connction faliure', err));

//server
app.listen(config.PORT,() => {
    console.log(`Delivery service is running on port ${config.PORT}`);
});