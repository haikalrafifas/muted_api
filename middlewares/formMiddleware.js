const { validationResult, body } = require('express-validator');

const formMiddleware = (rules) => {
    return async (req, res, next) => {
        try {
            // Validate request body against provided rules
            await Promise.all(rules(req).map(validation => validation.run(req)));

            // Check for validation errors
            const errors = validationResult(req);
            if ( !errors.isEmpty() ) {
                const errorMessages = {};
                console.log(body(email));
                errors.array().forEach(error => {
                    // Populate errorMessages object with relevant error messages
                    if ( !errorMessages[error.path] ) {
                        errorMessages[error.path] = error.msg;
                    }
                });
                return res.status(400).json({ errors: errorMessages });
            }

            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.error('Error in formMiddleware:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
};

module.exports = formMiddleware;
