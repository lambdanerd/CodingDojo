var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, _next) {
  if (req.session.count) {
    ++req.session.count;
  } else {
    req.session.count = 1;
  }
  res.render('index', { count: req.session.count });
});

router.get('/destroy', function(req, res, _next) {
  req.session.count = 0;
  res.redirect('/');
});

router.get('/double', function(req, res, _next) {
  req.session.count++;
  res.redirect('/');
});

module.exports = router;
