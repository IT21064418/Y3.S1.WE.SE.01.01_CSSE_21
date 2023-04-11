const express = require('express');
const https = require('https');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const config = require('./config'); //importing MONGODB_URL, PORT
const sslOptions = require('./ssl'); //importing ssl key and certification

const app = express();

app.use(bodyParser.json());
app.use(cors());

//routes
const paymentRoutes = require('./routes/payments');

app.use('/api', paymentRoutes);

//mongodb connection
mongoose.set('strictQuery', false);

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Database connected");
}).catch((err) => console.log('DB connection error', err))

//server
const paymentServer = https.createServer(sslOptions, app);

paymentServer.listen(config.PORT, () => {
    console.log(`payment service is running on port ${config.PORT}`);
})