const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' + JWT_SECRET});
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = authMiddleware;
