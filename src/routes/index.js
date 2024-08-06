import express from 'express';
import userRoutes from './userRoutes.js';
import bookRoutes from './bookRoutes.js';

const routes = (app) => {
    app.use(express.json(), userRoutes, bookRoutes);
};

export default routes;
