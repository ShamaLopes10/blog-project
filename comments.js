// routes/comments.js

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET all comments
router.get('/', commentController.getAllComments);

// GET a single comment
router.get('/:id', commentController.getCommentById);

// CREATE a new comment
router.post('/', commentController.createComment);

// UPDATE a comment
router.put('/:id', commentController.updateComment);

// DELETE a comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;
