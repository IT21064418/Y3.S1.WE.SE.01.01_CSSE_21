const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const config = require('./config'); //importing MONGODB_URI, PORT
const amqpServer = require('./utils/amqpServer'); //importing amqp servers functions

const app = express();

app.use(bodyParser.json());
app.use(cors());

//routes
const orderRoutes = require('./routes/orders');

app.use('/api', orderRoutes);

//rabbitmq connection
amqpServer.connect();

//mongodb connection
mongoose.set('strictQuery', false);

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Database connected");
}).catch((err) => console.log('DB connection error', err))

//server
app.listen(config.PORT,() => {
    console.log(`Order-management service is running on port ${config.PORT}`);
});