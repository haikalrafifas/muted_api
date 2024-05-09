const router = require("express").Router();

const AuthController = require("../controllers/authController");
const formMiddleware = require("../middlewares/formMiddleware");

const loginRequest = require("../requests/loginRequest");
const registerRequest = require("../requests/registerRequest");
const refreshRequest = require("../requests/refreshRequest");

// Routes
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refresh", formMiddleware(refreshRequest), AuthController.refresh);

router.get("/test", AuthController.test);

module.exports = router;
