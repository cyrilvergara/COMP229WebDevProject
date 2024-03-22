const express = require('express');
const router = express.Router();


const {SignupUser, loginUser, passwordResetRequest, passwordReset } = require('../controllers/AuthController')


// Route to sign up a new user
router.post('/signup', SignupUser);

// Route to log in a user
router.post('/login', loginUser);

// Route for password reset request
router.post('/password/reset/request', passwordResetRequest);

// Route for password reset
router.post('/password/reset/:token', passwordReset);

module.exports = router;
