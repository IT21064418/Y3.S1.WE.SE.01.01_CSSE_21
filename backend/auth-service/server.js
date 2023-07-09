const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
}).then(() => {

        console.log("Database connected");
    
    }).catch((err) => console.log('DB connction faliure', err));

app.use('/api/auth', authRoutes);

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});


