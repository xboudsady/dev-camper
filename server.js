const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require ('colors');
const errorHanlder = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamp');
const courses = require('./routes/courses');


// Initialize our application with express
const app = express();

// Body parser
app.use(express.json());

// Dev logging Middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
};

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use(errorHanlder);



// Load environment variables
const PORT = process.env.PORT || 5000;

// Call our server, (port, callback function())
const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhalded promise rections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
});