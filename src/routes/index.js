import express from 'express';
import userRoutes from './userRoutes.js';
import bookRoutes from './bookRoutes.js';
import loanRoutes from './loanRoutes.js';

const routes = (app) => {
    app.use(express.json(), userRoutes, bookRoutes, loanRoutes);
};

export default routes;
