const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    // Get token from the request headers
    const token = req.headers.authorization;

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, generateSecret());

        // Attach the decoded user information to the request object
        req.user = decoded;

        // Move to the next middleware or route handler
        next();
    } catch (error) {
        // Token verification failed
        return res.status(401).json({ error: 'Invalid token.' });
    }
};

module.exports = authenticateUser;
