const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const refreshToken = (oldToken = "") => {
    // Refresh token

};

const generateToken = (claim = {}) => {
    // Genertae token
    return jwt.sign(claim, JWT_SECRET);
};

module.exports = {
    refreshToken,
    generateToken,
};
