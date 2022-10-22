const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentsSchema = new Schema({
  author: { type: String, default: "Anonymous User" },
  commentText: String,
  date: { type: Date, default: Date.now }
})

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment