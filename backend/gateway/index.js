const express = require('express'); 
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/userProfile', proxy('http://localhost:5001')); //userprofile
app.use('/payment', proxy('http://localhost:8003')); //payment
app.use('/delivery', proxy('http://localhost:8004')); //delivery
app.use('/auth', proxy('http://localhost:5000')); //auth-service
app.use('/ratingandreviews', proxy('http://localhost:4000')); //ratingandreviews
app.use('/items', proxy('http://localhost:4001')); //Item Management
app.use('/order', proxy('http://localhost:8007')); //Order Management 
app.use('/cart', proxy('http://localhost:8080')); //Cart management  

app.listen(8000, () => {

    console.log('gateway is listening to port 8000');

});