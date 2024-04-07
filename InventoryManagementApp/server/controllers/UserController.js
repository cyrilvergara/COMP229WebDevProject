const  User  = require("../models/UserModel");
require('dotenv').config();

const create = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.status(200).json({
            message: "Successfully registered!"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
        const { userId } = req.params;
        const updates = req.body;

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



module.exports = { create, getAllUsers, updateUser, deleteUser };

  