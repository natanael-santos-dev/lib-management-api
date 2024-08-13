import express from 'express';
import loanController from '../controllers/loanController.js';

const loanRoutes = express.Router();

loanRoutes.post('/loans', loanController.createLoan);

export default loanRoutes;
