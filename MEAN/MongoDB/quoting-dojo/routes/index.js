const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

/* GET home page. */
router.get('/', (_req, res, _next) => {
  res.render('index');
});

router.post('/createQuote', (req, res, _next) => {
  Quote.create(req.body, (err, _quote) => {
    err ? console.log(err) : res.redirect('/quotes');
  });
});

router.get('/quotes', (_req, res, _next) => {
  Quote.find({}, (err, quotes) => {
    err ? console.log(err) : res.render('quotes', { quotes: quotes });
  });
});

module.exports = router;
