const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authenticateUsers');
const {
    createInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
    updateInventoryItem,
    deleteInventoryItem
} = require('../controllers/InventoryController');



// Route to create a new inventory item
router.post('/create', authenticateUser ,createInventoryItem);

// Route to get all inventory items
router.get('/', authenticateUser,getAllInventoryItems);

// Route to get a single inventory item by ID
router.get('/:itemId', authenticateUser, getInventoryItemById);

// Route to update an existing inventory item
router.put('/:itemId', authenticateUser,updateInventoryItem);

// Route to delete an existing inventory item
router.delete('/:itemId', authenticateUser,deleteInventoryItem);

module.exports = router;
