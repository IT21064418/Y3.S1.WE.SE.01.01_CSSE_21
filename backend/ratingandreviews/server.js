require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const ratingroutes = require('./routes/ratingandreviews')

//express app
const app = express();

//middleware
app.use(express.json())
app.use(cors());

//routes
app.use('/api/ratingandreviews',ratingroutes)

app.get('/api/ratingandreviews/:id', (req, res) => {
    const id = req.params.id;
    // retrieve the review data and send it in the response
    res.header('Access-Control-Allow-Origin', '*'); // allow all origins
    res.json(reviewData);
  });


//connect to db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port',process.env.PORT);
    }) 
})
.catch((error)=>{
    console.log(error)
})

