const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });     // Load env vars

// Initialize our application with express
const app = express();


// ----- ROUTES -----

// Get all bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all boocamps' });
});

// Show single bootcamp
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

// Add a bootcamp
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp'})
});

// Update a single bootcamp
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

// Delete a single bootcamp
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});


// Load environment variables
const PORT = process.env.PORT || 50000;

// Call our server, (port, callback function())
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));