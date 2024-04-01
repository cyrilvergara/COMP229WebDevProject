const jwt = require('jsonwebtoken');
// const {expressJwt} = require('express-jwt');
// const config = require("../config/config");

const authenticateUser = (req, res, next) => {
    // Get token from the request headers
    const token = req.headers.authorization;
console.log(token);
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


// const requireSignin = expressJwt({
//     secret: config.jwtSecret,
//     algorithms: ["HS256"],
//     userProperty: "auth",
//   });

module.exports = {authenticateUser};
