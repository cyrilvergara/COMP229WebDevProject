const  User  = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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


// Controller to get all users
const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a user
const updateUser = async (req, res) => {
    try {
        const { userId } = req.params; // Assuming userId is passed as a route parameter
        const updates = req.body; // Assuming the updates are sent in the request body

        // Update the user in the database
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Controller to delete a user
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params; // Assuming userId is passed as a route parameter

        // Find the user by ID and delete it from the database
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { SignupUser,loginUser, getAllUsers, updateUser, deleteUser };

  