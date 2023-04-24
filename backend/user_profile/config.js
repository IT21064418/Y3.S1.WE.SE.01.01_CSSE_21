require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5001,
  dbURI: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
};
