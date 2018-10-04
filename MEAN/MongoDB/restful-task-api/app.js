const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./mongoose');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
