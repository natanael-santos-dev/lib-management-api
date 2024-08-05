import express from 'express';
import connectsDB from '../config/connection.js';

const connection = await connectsDB();

connection.on('error', (error) => {
    console.log(`Connection error: ${error}`);
});

connection.once('open', () => {
    console.log('Connection to database successfuly!');
});

const app = express();

export default app;
