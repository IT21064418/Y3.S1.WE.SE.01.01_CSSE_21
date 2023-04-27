require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ratingroutes = require('./routes/ratingandreviews');
const config = require('./config');
const amqpServer = require('./utils/amqpServer');

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//rabbitMq Server
amqpServer.connect();

//routes
app.use('/api/ratingandreviews',ratingroutes);

app.get('/api/ratingandreviews/:id', (req, res) => {
    const id = req.params.id;
    // retrieve the review data and send it in the response
    res.header('Access-Control-Allow-Origin', '*'); // allow all origins
    res.json(reviewData);
  });

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

