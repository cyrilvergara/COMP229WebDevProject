const  User  = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

require('dotenv').config();


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
        const jwtSecret = process.env.JWT_SECRETE_KEY;
        const token = jwt.sign({ userId: user._id }, jwtSecret , { expiresIn: '1h' });

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
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE_KEY, { expiresIn: '1h' });

        // Send password reset email
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Password Reset Request',
            text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
                Please click on the following link, or paste this into your browser to complete the process:\n\n
                http://${req.headers.host}/api/password/reset/${token}\n\n
                If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending password reset email:', error);
                return res.status(500).json({ error: 'Failed to send password reset email' });
            }
            console.log('Password reset email sent:', info.response);
            res.status(200).json({ message: 'Password reset email sent successfully' });
        });
    } catch (error) {
        console.error('Error requesting password reset:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Password Reset Endpoint
const passwordReset = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        // Verify token
        jwt.verify(token, process.env.JWT_SECRETE_KEY, async (err, decoded) => {
            if (err) {
                return res.status(400).json({ error: 'Invalid or expired token' });
            }
            const userId = decoded.userId;

            // Find user by ID and update password
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            user.password = password; // Update password (you may need to hash it)
            await user.save();

            res.status(200).json({ message: 'Password updated successfully' });
        });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { SignupUser,loginUser, passwordResetRequest, passwordReset  };

  