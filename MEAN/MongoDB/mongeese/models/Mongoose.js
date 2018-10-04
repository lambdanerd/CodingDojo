const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required']
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: [0, 'Age must be greater than zero.']
    }
  },
  { timestamps: true }
);

// This is totally *NOT* confusing
const Mongoose = mongoose.model('Mongoose', mongooseSchema);

module.exports = Mongoose;
