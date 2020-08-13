const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = asyn() => {
    try {
       await mongoose.connect(db);

       console.log('MongoDB connected...');
    } catch(err) {
       console.error(err.message);
       //exit process with failure
       process.exit(1);
    }
}

module.export connectDB;
