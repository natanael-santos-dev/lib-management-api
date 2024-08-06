import express from 'express';
import BookController from '../controllers/bookController.js';

const bookRoutes = express.Router();

bookRoutes.get('/books', BookController.getBooks);

bookRoutes.get('/books/:id', BookController.getBook);

bookRoutes.post('/books', BookController.addBook);

bookRoutes.put('/books/:id', BookController.updateBook);

export default bookRoutes;
