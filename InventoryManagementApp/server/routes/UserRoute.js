const express = require('express');
const router = express.Router();

const { create, getAllUsers, updateUser, deleteUser} = require('../controllers/UserController')


// Route to create a new user
router.post('/', create);

// Route to get all users
router.get('/', getAllUsers);

// Route to update a user
router.put('/:userId', updateUser);

// Route to delete a user
router.delete('/:userId', deleteUser);

module.exports = router;
