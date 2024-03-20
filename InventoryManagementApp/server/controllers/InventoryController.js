const Inventory = require('../models/InventoryModel');

// Create a new inventory item
const createInventoryItem = async (req, res) => {
    try {
        const inventoryItem = new Inventory(req.body);
        const savedItem = await inventoryItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all inventory items
const getAllInventoryItems = async (req, res) => {
    try {
        const inventoryItems = await Inventory.find();
        res.status(200).json(inventoryItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single inventory item by ID
const getInventoryItemById = async (req, res) => {
    try {
        const { itemId } = req.params;
        const inventoryItem = await Inventory.findById(itemId);
        if (!inventoryItem) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.status(200).json(inventoryItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing inventory item
const updateInventoryItem = async (req, res) => {
    try {
        const { itemId } = req.params;
        const updates = req.body;
        const updatedItem = await Inventory.findByIdAndUpdate(itemId, updates, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an existing inventory item
const deleteInventoryItem = async (req, res) => {
    try {
        const { itemId } = req.params;
        const deletedItem = await Inventory.findByIdAndDelete(itemId);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.status(200).json({ message: 'Inventory item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
    updateInventoryItem,
    deleteInventoryItem
};
