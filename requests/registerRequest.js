const { body } = require('express-validator');

// Define your validation rules and messages
const rules = [
    { field: 'column1', message: 'The column1 field must be filled.' },
    { field: 'column2', message: 'The column2 field must be filled and must be a string.' }
];

const registerRequest = (req) => {
    return rules.map(({ field, message }) => {
        return body(field).notEmpty().withMessage(message);
    });
};

module.exports = registerRequest;
