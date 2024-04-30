// routes/users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getAllUsers);

// GET a single user
router.get('/:id', userController.getUserById);

// CREATE a new user
router.post('/', userController.createUser);

// UPDATE a user
router.put('/:id', userController.updateUser);

// DELETE a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
