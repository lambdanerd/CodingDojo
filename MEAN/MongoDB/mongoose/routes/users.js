const express = require('express');
const { User } = require('../model');
const router = express.Router();

/* GET users listing. */
router.get('/', function(_req, res, _next) {
  User.find({}, function(_err, users) {
    res.render('users', { users: users });
  });
});

router.post('/', function(req, res, _next) {
  console.log('POST DATA: ', req.body);
  let user = new User({ name: req.body.name, age: req.body.age });
  user.save(function(err) {
    if (err) {
      console.log('something went wrong', err);
    } else {
      console.log('successfully added a user!');
      res.redirect('/users');
    }
  });
});

module.exports = router;
