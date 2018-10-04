const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Comment = require('../models/Comment');

router.get('/', (_req, res, _next) => {
  Message.find({})
    .sort('-createdAt')
    .populate('comments')
    .exec((err, messages) => {
      return err
        ? console.log(err)
        : res.render('index', { messages: messages });
    });
});

router.post('/messages', (req, res, _next) => {
  Message.create(err => {
    return err
      ? err.errors.forEach(error => req.flash('create', `${error.message}`)) &&
          res.redirect('/')
      : res.redirect('/');
  });
});

router.post('/comments/:id', (req, res, _next) => {});

// router.get('/mongeese/new', (_req, res, _next) => {
//   return res.render('new');
// });

// router.post('/mongeese', (req, res, _next) => {
//   Mongoose.create(req.body, (err, _mongoose) => {
//     return err
//       ? err.errors.forEach(error => req.flash('create', `${error.message}`)) &&
//           res.redirect('/mongeese/new')
//       : res.redirect('/');
//   });
// });

// router.get('/mongeese/:id', (req, res, _next) => {
//   Mongoose.findOne({ _id: req.params.id }, (err, mongoose) => {
//     return err
//       ? console.log(err) && res.redirect('/')
//       : res.render('show', { mongoose: mongoose });
//   });
// });

// router.get('/mongeese/edit/:id', (req, res, _next) => {
//   Mongoose.findOne({ _id: req.params.id }, (err, mongoose) => {
//     return err
//       ? console.log(err) && res.redirect('/')
//       : res.render('edit', { mongoose: mongoose });
//   });
// });

// router.post('/mongeese/:id', (req, res, _next) => {
//   Mongoose.updateOne({ _id: req.params.id }, req.body, (err, _raw) => {
//     return err
//       ? err.errors.forEach(error => req.flash('create', error.message)) &&
//           res.redirect('/mongeese/new')
//       : res.redirect('/');
//   });
// });

// router.get('/mongeese/destroy/:id', (req, res, _next) => {
//   Mongoose.deleteOne({ _id: req.params.id }, err => {
//     return err ? console.log(err) && res.redirect('/') : res.redirect('/');
//   });
// });

module.exports = router;
