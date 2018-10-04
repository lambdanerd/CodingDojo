const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.get('/', (_req, res, _next) => {
  Person.find({}, (err, people) => {
    return err ? console.log(err) : res.json(people);
  });
});

router.get('/new/:name', (req, res, _next) => {
  let person = new Person({ name: req.params.name });
  person.save(err => {
    return err ? console.log(err) : res.redirect('/');
  });
});

router.get('/delete/:name', (req, res, _next) => {
  Person.deleteOne({ name: req.params.name }, err => {
    return err ? console.log(err) : res.redirect('/');
  });
});

router.get('/:name', (req, res, _next) => {
  Person.find({ name: req.params.name }, (err, person) => {
    return err ? console.log(err) : res.json(person);
  });
});

module.exports = router;
