const express = require('express');
const dotenv = require('dotenv');

// Loads our route files from folder
const bootcamps = require('./routes/bootcamp');


dotenv.config({ path: './config/config.env' });     // Load env vars

// Initialize our application with express
const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);



// Load environment variables
const PORT = process.env.PORT || 50000;

// Call our server, (port, callback function())
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));