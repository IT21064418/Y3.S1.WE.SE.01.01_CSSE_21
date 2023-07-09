const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const amqp = require('amqplib');

const config = require('./config');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const amqpServer = require('./utils/amqpServer');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//rabbitmq connection
amqpServer.connect().then(() => {
  amqpServer.consumefromQueue(); 
});

mongoose.connect(config.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
}).then(() => {

  console.log("Database connected");
  
}).catch((err) => console.log('DB connction faliure', err));

app.use('/api/users', authMiddleware.authenticateUser, userRoutes);

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
