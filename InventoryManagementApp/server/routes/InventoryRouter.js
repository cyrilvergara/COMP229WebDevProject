const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authenticateUsers');
const multer = require('multer');

const {
    createInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
    updateInventoryItem,
    deleteInventoryItem,
    uploadBulkInventory
} = require('../controllers/InventoryController');

// Set up multer storage and file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination directory for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep the original file name
    }
});

const upload = multer({ storage: storage });

// Route to create a new inventory item
router.post('/create', authenticateUser, createInventoryItem);

// Route to get all inventory items
router.get('/', authenticateUser, getAllInventoryItems);

// Route to get a single inventory item by ID
router.get('/:itemId', authenticateUser, getInventoryItemById);

// Route to update an existing inventory item
router.put('/:itemId', authenticateUser, updateInventoryItem);

// Route to delete an existing inventory item
router.delete('/:itemId', authenticateUser, deleteInventoryItem);

// Route to upload bulk inventory from CSV
router.post('/upload', authenticateUser, upload.single('csvFile'), uploadBulkInventory);

module.exports = router;
