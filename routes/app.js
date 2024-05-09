const router = require("express").Router();

const ReportController = require("../controllers/reportController");
const NotificationController = require("../controllers/notificationController");
const UserController = require("../controllers/userController");

// Routes
router.get("/reports", ReportController.index);
router.post("/reports", ReportController.store);
router.get("/reports/:id", ReportController.show);
router.delete("/reports/:id", ReportController.destroy);

// router.get("/notifications", NotificationController.index);
// router.get("/notifications/:id", NotificationController.show);
router.get("/notifications/update", NotificationController.update);

// router.get("/user", UserController.index);
// router.patch("/user", formMiddleware, UserController.edit);

module.exports = router;
