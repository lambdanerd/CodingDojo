const express = require('express');
const router = express.Router();

router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'Express' });
});

router.get('/cats', function(_req, res, _next) {
  res.render('cats');
});

router.get('/cats/:catId', function(req, res, _next) {
  let cat = getCatInfo(req.params.catId);
  res.json({ cat });
});

router.get('/cars', function(_req, res, _next) {
  res.render('cars');
});

router.get('/cars/new', function(_req, res, _next) {
  res.render('car_form');
});

module.exports = router;
