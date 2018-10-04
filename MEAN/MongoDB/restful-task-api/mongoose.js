const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
  MLAB_USER = process.env.MLAB_USER;
  MLAB_PASS = process.env.MLAB_PASS;
  MLAB_SERVER = process.env.MLAB_SERVER;
}

const mongoURI =
  `mongodb://${MLAB_USER}:${MLAB_PASS}@${MLAB_SERVER}` ||
  'mongodb://localhost/restful-task-api';

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
);

module.exports = mongoose;
