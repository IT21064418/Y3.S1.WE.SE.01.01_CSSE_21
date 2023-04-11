require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  dbURI: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
};
