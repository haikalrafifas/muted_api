const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { generateToken } = require("../utils/token");
const response = require("../utils/response");
const { checkRequiredFields } = require("../utils/upload");

exports.register = async (req, res) => {
    try {
        if ( !checkRequiredFields(["name", "email", "password"], req.body) ) {
            return response.error.badRequest(res, "Invalid fields");
        }

        const { name, email, password } = req.body;
        
        // Encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const data = { name, email };

        // Create user in the database
        const newUser = new User({ ...data, password: hashedPassword, is_sub: 1 });
        await newUser.save();

        response.success(res, { message: "User registered successfully!", data });
    } catch (error) {
        console.error("Failed to register user:", error);
        response.error.internalServer(res);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by username
        const user = await User.findOne({ email });

        if ( !user ) {
            return response.error.badRequest(res, "Invalid credentials");
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if ( !passwordMatch ) {
            return response.error.badRequest(res, "Invalid credentials");
        }

        // Generate JWT token
        const token = generateToken({ id: user._id, email: user.email });
        response.success(res, { message: "Successfully logged in!", data: { token } });
    } catch (error) {
        console.error("Error logging in:", error);
        response.error.internalServer(res);
    }
};

// exports.refresh = (req, res) => {
//     // Refresh token
//     const token = refreshToken(req.headers.authorization);
//     res.json({ token: token });
// };
