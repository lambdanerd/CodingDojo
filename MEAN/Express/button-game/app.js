const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const stylus = require('stylus');

const indexRouter = require('./routes/index');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const Button = require('./lib/buttonGame');
const button = new Button();

console.log(`Spawning Button with ${button.clicks} clicks.`);

io.on('connect', socket => {
  socket.emit('updateClicksView', button.clicks);
  socket.on('action', msg => {
    button.handleMessage(msg);
    socket.emit('updateClicksView', button.clicks);
    socket.broadcast.emit('updateClicksView', button.clicks);
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use((_req, res, next) => {
  res.io = io;
  next();
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, _next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = { app: app, server: server };
