const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const axios = require('axios');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/bars';
const PORT = process.env.PORT || 3001;
const barRouter = require('./Route/bar.js');
const userRouter = require('./Route/user.js');

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true },
  err => {
    console.log(err || 'Connected to mongodb');
  }
);

server.use(bodyParser.json());
server.use(logger('dev'));

server.use('/api/bar', barRouter);
server.use('/api/user', userRouter);

server.listen(PORT, err => {
  console.log(err || `server running on ${PORT}`);
});
