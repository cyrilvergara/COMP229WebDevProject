const Inventory = require('../models/InventoryModel');
const fs = require('fs');
const XLSX = require('xlsx');
const moment = require('moment'); // For date handling

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
        console.log(req.body);
        const { itemId } = req.params;
        const updates = req.body;
        const updatedItem = await Inventory.findByIdAndUpdate(itemId, updates, { new: true });

        if (!item) {
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


// Bulk upload controller
const uploadBulkInventory = async (req, res) => {
    try {
        const workbook = XLSX.readFile(req.file.path);
        const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        const processedData = json.map(item => {
            // Parse and validate the lastsold date
            if (item.lastsold && typeof item.lastsold === 'string') {
                const parsedDate = moment(item.lastsold, 'DD-MMM-YY');
                if (parsedDate.isValid()) {
                    item.lastsold = parsedDate.toDate();
                } else {
                    // Handle invalid dates as needed
                    item.lastsold = undefined; // or set to a default value
                }
            }
            return item;
        });

        // Bulk insert into MongoDB
        const insertedItems = await Inventory.insertMany(processedData);
        res.status(201).json(insertedItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    } finally {
        // Cleanup: delete the uploaded file after processing
        fs.unlinkSync(req.file.path);
    }
};

const getInventoryItemByName = async (req, res) => {
    try {
        const { name } = req.params;
        const inventoryItem = await Inventory.find({itemName: name})

        if (!inventoryItem) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.status(200).json(inventoryItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
    updateInventoryItem,
    deleteInventoryItem,
    uploadBulkInventory,
    getInventoryItemByName
};
