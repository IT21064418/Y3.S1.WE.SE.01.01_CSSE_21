const dotEnv = require("dotenv");

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || 8004,
    jwtSecret: process.env.JWT_SECRET
};