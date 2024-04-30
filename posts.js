// routes/posts.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// GET all blog posts
router.get('/', postController.getAllPosts);

// GET a single blog post
router.get('/:id', postController.getPostById);

// CREATE a new blog post
router.post('/', postController.createPost);

// UPDATE a blog post
router.put('/:id', postController.updatePost);

// DELETE a blog post
router.delete('/:id', postController.deletePost);

module.exports = router;
