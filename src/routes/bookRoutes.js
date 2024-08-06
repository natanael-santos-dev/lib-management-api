import express from 'express';
import BookController from '../controllers/bookController.js';

const bookRoutes = express.Router();

bookRoutes.get('/books', BookController.getBook);

export default bookRoutes;
