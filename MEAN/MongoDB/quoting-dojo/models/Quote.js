const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  quotee: { type: String, required: [true, 'Name is required.'] },
  quote: { type: String, required: [true, 'Quote is required.'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
