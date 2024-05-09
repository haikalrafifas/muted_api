const jwt = require("jsonwebtoken");
const response = require("../utils/response");

const { JWT_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if ( !token ) {
        return response.error.unauthorized(res);
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        console.log(decoded);
        if ( err ) {
            return response.error.forbidden(res);
        }
        req.user = decoded;
    });
    
    next();
};

module.exports = authMiddleware;
