const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(_req, res, next) {
  res.io.on('connection', function(socket) {
    socket.on('postingForm', function(data) {
      socket.emit('randomNumber', { number: Math.floor(Math.random() * 100) });
      socket.emit('updatedMessage', { msg: data.msg });
    });
  });
  next();
});

router.get('/', function(_req, res, _next) {
  res.render('index');
});

// router.post('/submit', function(req, res, _next) {
//   console.log(req.body);
//   req.session.surveyInput = req.body;
//   res.redirect('/result');
// });

// router.get('/result', function(req, res, _next) {
//   res.render('result', { surveyInput: req.session.surveyInput });
// });

module.exports = router;
