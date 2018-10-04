const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: 2
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      maxlength: 280
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true, usePushEach: true }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
