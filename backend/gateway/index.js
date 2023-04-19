const express = require('express'); 
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/authentication', proxy('http://localhost:5000')); //auth-service
app.use('/userProfile', proxy('http://localhost:5001'));
app.use('/payment', proxy('http://localhost:8003'));
app.use('/product', proxy('http://localhost:8002')); //product
app.use('/delivery',proxy('http://localhost:8004'));


app.listen(8000, () => {

    console.log('gateway is listening to port 8000');

});