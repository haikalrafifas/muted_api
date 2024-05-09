const { verifyToken } = require("../utils/token");
const response = require("../utils/response");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization.substring(7);
    if ( !token ) {
        return response.error.unauthorized(res);
    }

    const decoded = verifyToken(token);

    if ( !decoded ) {
        return response.error.forbidden(res);
    }

    req.user = decoded;

    next();
};

module.exports = authMiddleware;
