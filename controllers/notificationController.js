const Report = require("../models/reportModel");
const User = require("../models/userModel");
const response = require("../utils/response");
const notification = require("../utils/notification");

exports.update = async (req, res) => {
    try {
        const relevantReports = await Report.find({
            noise_level: { $gte: 100 },
            timestamp: { $gte: 0 },
            // timestamp: { $gte: new Date().setHours(0, 0, 0, 0) / 1000 }, // TODAY in UNIX
        });

        if ( relevantReports.length === 0 ) {
            return response.error.notFound({ res, message: "No notification updates are present!" });
        }

        // Find users who have subscribed to notifications
        const subscribedUsers = await User.find({ is_sub: 1 });

        // Extract FCM tokens of subscribed users
        const subscribedUserId = subscribedUsers.map(user => user._id);

        const locations = relevantReports.reduce((_, location) => {
            _.lat.push(location.lat);
            _.lng.push(location.lng);
            return _;
        }, { lat: [], lng: [] });

        // Construct FCM message
        const message = {
            notification: {
                title: "High Noise Alert",
                body: "There is high noise level near your location.",
            },
            data: {
                location: {
                    lat: locations.lat,
                    lng: locations.lng,
                },
                users: subscribedUserId,
            },
        };

        // Send notification to subscribed users
        notification.trigger("notifications", "new-notification", message);

        // Send response
        response.success(res, { message: "Notifications sent successfully", data: message });
    } catch (_) {
        return response.error.internalServer(res);
    }
};
