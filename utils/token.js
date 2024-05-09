const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const refreshToken = (oldToken) => {
    // Refresh token
    // const decoded = verifyToken(oldToken);
};

const generateToken = (claim = {}) => {
    // Generate token
    return jwt.sign(claim, JWT_SECRET);
};

const verifyToken = (token) => {
    try {
        // Verify token
        return jwt.verify(token, JWT_SECRET);
    } catch (_) {
        // Token verification failed
        return null;
    }
};

module.exports = {
    refreshToken,
    generateToken,
    verifyToken,
};
