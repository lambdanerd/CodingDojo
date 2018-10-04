const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: 3
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
      maxlength: 280
    }
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
