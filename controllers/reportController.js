const { validationResult } = require("express-validator");
const Report = require("../models/reportModel");
const response = require("../utils/response");
const { checkId } = require("../utils/upload");

exports.index = async (req, res) => {
    const result = await Report.find();
    response.success(res, response.helper.convertId(result));
};

exports.store = async (req, res) => {
    // Add new report
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return response.error.badRequest(res, errors.array());
    }

    const { name, email, password } = req.body;
    await Report.create({ name, email, password });

    response.success(res, { message: "Successfully add new report!", data: {} });
};

exports.show = async (req, res) => {
    // Find report by id
    try {
        const id = checkId(req.params.id);
        const result = await Report.findOne({ _id: id });
        return result ? response.success(res, result) : response.error.notFound(res, id);
    } catch (_) {
        return response.error.notFound({ res, message: _.message });
    }
};

exports.destroy = async (req, res) => {
    // Delete a report
    try {
        const id = checkId(req.params.id);
    
        const result = await Report.findOneAndDelete({ _id: id });
        return result ? response.success(res, result) : response.error.notFound(res, id);
    } catch (_) {
        return response.error.notFound(res, _.message);
    }
};


