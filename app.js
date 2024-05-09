require('dotenv').config();
const express = require('express');
const compression = require('compression');

const app = express();
const PORT = 3000;

// Middleware for JWT Authentication
const authMiddleware = require('./middlewares/authMiddleware');
const routes = require('./routes/api');

// Compression middleware
app.use(compression());

// API routes
app.use('/api', 
// authMiddleware,
 routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
