const dotEnv = require("dotenv");

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGO_URI
};
