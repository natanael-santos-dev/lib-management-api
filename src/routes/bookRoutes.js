import express from 'express';
import BookController from '../controllers/bookController.js';

const bookRoutes = express.Router();

bookRoutes.get('/books', BookController.getBooks);

bookRoutes.get('/books/:id', BookController.getBook);

export default bookRoutes;
