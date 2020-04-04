const mongoose = require('mongoose');

const connectDB = async () => {
    // Call mongoose to connect
     const conn = await mongoose.gonnect(process.env.MONG_URL, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false
     });

     console.log(`MongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;