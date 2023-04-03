const express = require('express');

const app = express();

app.use('/',  (req,res,next) => {

    return res.status(200).json({"msg":"Hello from payment"})

});

app.listen(8003, () => {

    console.log('payment service is listening to port 8003');

});