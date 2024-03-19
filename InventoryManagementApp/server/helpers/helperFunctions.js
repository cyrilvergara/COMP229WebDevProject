const crypto = require('crypto');

// Generate a random string of 32 characters
const generateSecret = () => {
    return crypto.randomBytes(16).toString('hex');
};

