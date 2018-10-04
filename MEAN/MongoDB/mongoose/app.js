const createError = require('http-errors');
const express = require('express');
const flash = require('express-flash');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const stylus = require('stylus');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const mongoose = require('mongoose');
const validator = require('mongoose-validator');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(flash());

mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb://lambdanerd:PEmxIfY9Oh5DlVRIFFRHGheEc2yrEJ7MmIuA29kaiYPwu6QH86jrC9UelM44h2AKp13npnKZbNFdJIacsccUBkJ3KTYIzP1lMjN3@ds223542.mlab.com:23542/meany-pants'
);

module.exports = { app: app, mongoose: mongoose };
