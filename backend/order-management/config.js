module.exports = {
    MONGODB_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 8007,
    jwtSecret: process.env.JWT_SECRET
};