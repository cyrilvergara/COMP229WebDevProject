const express = require('express');
const router = express.Router();

const {SignupUser, loginUser, getAllUsers, updateUser, deleteUser } = require('../controllers/UserController')


// Route to get all users
router.get('/', getAllUsers);

// Route to sign up a new user
router.post('/signup', SignupUser);

// Route to log in a user
router.post('/login', loginUser);

// Route to update a user
router.put('/:userId', updateUser);

// Route to delete a user
router.delete('/:userId', deleteUser);

module.exports = router;
