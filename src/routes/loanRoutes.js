import express from 'express';
import loanController from '../controllers/loanController.js';

const loanRoutes = express.Router();

loanRoutes.post('/loans', loanController.createLoan);

loanRoutes.put('/loans/:id', loanController.closeLoan);

export default loanRoutes;
