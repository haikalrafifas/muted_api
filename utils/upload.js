// Convert invalid id into ObjectId-compatible format
const checkId = (id) => {
    if ( id.length !== 24 ) throw new Error(`Item with id '${id}' was not found!`);
    return id;
};

// Checks if all uploaded fields are present on the required fields
const checkRequiredFields = (requiredFields, uploadedFields) => {
    return requiredFields.filter(field => !(field in uploadedFields)).length === 0;
};

module.exports = { checkId, checkRequiredFields };
