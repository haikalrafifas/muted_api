const error = {
    badRequest: (res, message) => {
        const json = typeof message === "string" ? { message: message } : message;
        return res.status(400).json(json);
    },
    unauthorized: (res) => {
        return res.status(401).json({ message: "Unauthorized"});
    },
    forbidden: (res) => {
        return res.status(403).json({ message: "Forbidden" });
    },
    notFound: ({ res, id, message }) => {
        if ( !message ) message = `Item with id '${id}' was not found!`;
        return res.status(404).json({ message: message });
    },
    internalServer: (res) => {
        return res.status(500).json({ message: "Internal Server Error" });
    },
};

const success = (res, json) => {
    return res.status(200).json(json);
};

const helper = {
    // Convert MongoDB's `_id` into `id`
    convertId: (json) => {
        return json.map(each => {
            const { _id, ..._ } = each.toObject();
            return { id: _id, ..._ };
        });
    },
};

module.exports = { error, success, helper };
