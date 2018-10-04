const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', (_req, res, _next) => {
  let options = {
    root: __dirname + '/public/dist/public',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('index.html', options, err => {
    err ? next(err) : console.log('Sent:', fileName);
  });
});

router.get('/:id', (req, res, _next) => {
  Task.find({ _id: req.params.id }, (err, task) => {
    return res.json(err ? err : task);
  });
});

router.post('/create', (req, res, _next) => {
  Task.create(req.body, (err, _task) => {
    return err ? res.json(err) : res.redirect('/');
  });
});

router.put('/:id', (req, res, next) => {
  Task.updateOne({ _id: req.params.id }, req.body, (err, _raw) => {
    return err ? res.json(err) : next();
  });
});

router.put('/:id', (req, res, _next) => {
  Task.updateOne(
    { _id: req.params.id },
    { updatedAt: Date.now() },
    (err, _raw) => {
      return err ? res.json(err) : res.redirect('/');
    }
  );
});

router.delete('/:id', (req, res, _next) => {
  Task.deleteOne({ _id: req.params.id }, err => {
    return err ? res.json(err) : res.redirect('/');
  });
});

module.exports = router;
