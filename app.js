require("dotenv").config();
const app = require("express")();
const compression = require("compression");
const upload = require("multer")();

const PORT = 3000;

// Compression middleware
app.use(compression());

// Database connection
require("./database")();

// Middleware to parse multipart/form-data requests
app.use(upload.any());

// Auth routes
app.use("/api/auth", require("./routes/auth"));

// App routes with auth middleware
app.use(
  "/api", 
  // require("./middlewares/authMiddleware"),
  require("./routes/app"),
);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
