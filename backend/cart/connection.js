require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = 'mongodb+srv://it21064418:it21064418@dscluster.qczuvg7.mongodb.net/DS_Project?retryWrites=true&w=majority';

mongoose.connect(connectionStr, {useNewUrlParser: true})
.then(() => console.log('connected to mongod'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
    console.log(err)
  })

