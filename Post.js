// models/Post.js

const mongoose = require('mongoose');

// Define a schema for blog posts
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model for blog posts
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
