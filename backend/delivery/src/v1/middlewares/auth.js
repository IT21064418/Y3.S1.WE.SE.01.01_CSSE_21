const jwt = require("jsonwebtoken");
const config = require('../config');

exports.authenticateUser = async (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ error: 'Authorization token not found.' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], config.jwtSecret);
        req.user = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid authorization token.' });
    }

};