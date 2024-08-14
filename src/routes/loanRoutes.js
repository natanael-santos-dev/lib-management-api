import express from 'express';
import loanController from '../controllers/loanController.js';

const loanRoutes = express.Router();

loanRoutes.get('/loans/:id', loanController.getLoan);

loanRoutes.post('/loans', loanController.createLoan);

loanRoutes.put('/loans/:id', loanController.closeLoan);

export default loanRoutes;
