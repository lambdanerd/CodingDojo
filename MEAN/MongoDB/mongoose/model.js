const mongoose = require('mongoose');
const { UserSchema } = require('./schema');

mongoose.model('User', UserSchema);

const User = mongoose.model('User');

module.exports = { User: User };
