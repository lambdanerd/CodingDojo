const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const app = express();
const mongoose = require('mongoose');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);

mongoose.connect(
  `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@${
    process.env.MLAB_SERVER
  }`,
  { useNewUrlParser: true }
);

module.exports = { app: app, mongoose: mongoose };
