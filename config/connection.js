import mongoose from 'mongoose';

async function connectsDB() {
    mongoose.connect(process.env.CONNECTION_STRING);

    return mongoose.connection;
}

export default connectsDB;
