const User = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();
const sgMail = require('@sendgrid/mail')


// Create New User
const SignupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user with hashed password
        const newUser = new User({
            name,
            email,
            hashed_password: hashedPassword // Store hashed password
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




// Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.hashed_password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const jwtSecret = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Password Reset Request Endpoint
const passwordResetRequest = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Generate password reset token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        // Send password reset email

        // Send password reset email

        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        const msg = {
            to: email, // Change to your recipient
            from: 'maxafangsco@gmail.com', // Change to your verified sender
            subject: 'Password Reset from WinterDev',
            text: 'Click the link below to set a new password:',
            html: `<body>
            <p>Click to set a new password: <a href="localhost:3000/api/auth/password/reset/${token}">Reset password</a></p>
         </body>`
        }

        sgMail
            .send(msg)
            .then((response) => {
                console.log(response[0].statusCode)
                console.log(response[0].headers)
            })
            .catch((error) => {
                console.error(error)
            })


    } catch (error) {
        console.error('Error requesting password reset:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const passwordReset = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(400).json({ error: 'Invalid or expired token' });
            }
            const userId = decoded.userId;

            // Find user by ID and update password
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Define saltRounds
            const saltRounds = 10;

            // Inside the passwordReset endpoint, before saving the new password
            try {
                const hashedPassword = await bcrypt.hash(password, saltRounds);
                user.hashed_password = hashedPassword;// Use the hashed password
                await user.save();
                res.status(200).json({ message: 'Password updated successfully' });
            } catch (error) {
                console.error('Error hashing password:', error);
                return res.status(500).json({ error: 'Error hashing password' });
            }

        });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { SignupUser, loginUser, passwordResetRequest, passwordReset };

