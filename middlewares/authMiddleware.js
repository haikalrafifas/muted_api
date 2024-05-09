const { verifyToken } = require("../utils/token");
const response = require("../utils/response");

const authMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    if ( !token ) {
        return response.error.unauthorized(res);
    }

    token = token.substring(7);

    const decoded = verifyToken(token);

    if ( !decoded ) {
        return response.error.forbidden(res);
    }

    req.user = decoded;

    next();
};

module.exports = authMiddleware;
