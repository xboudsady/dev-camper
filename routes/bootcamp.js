const express = require('express');
const router = express.Router();

// Get all bootcamps
router.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all boocamps' });
});

// Show single bootcamp
router.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

// Add a bootcamp
router.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp'})
});

// Update a single bootcamp
router.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

// Delete a single bootcamp
router.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});