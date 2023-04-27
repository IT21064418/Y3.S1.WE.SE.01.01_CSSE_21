const jwt = require("jsonwebtoken");
const config = require('../config');

function authenticateUser(req, res, next) {

  //get the token from the request header
    const token = req.header('Authorization');

    //check if the token is present
    if (!token) {
      return res.status(401).json({ error: 'Authorization token not found.' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], config.jwtSecret); //verify the jwt token
        req.user = decoded.id; //store the userId in the request header
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid authorization token.' });
    }

  }

module.exports = {
    authenticateUser,
};