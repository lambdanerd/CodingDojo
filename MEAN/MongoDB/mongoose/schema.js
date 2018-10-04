const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

module.exports = { UserSchema: UserSchema };
