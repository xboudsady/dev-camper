const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });     // Load env vars

// Initialize our application with express
const app = express();

// Load environment variables
const PORT = process.env.PORT || 50000;

// Call our server, (port, callback function())
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));