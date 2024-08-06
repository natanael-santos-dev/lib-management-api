import bookModel from '../models/bookModel.js';

class BookController {
    static async getBooks(req, res) {
        try {
            const books = await bookModel.find({});
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falid to search books`
            });
        }
    }

    static async getBook(req, res) {
        try {
            const id = req.params.id;
            const book = await bookModel.findById(id);
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falid to search book`
            });
        }
    }

    static async addBook(req, res) {
        try {
            const newBook = await bookModel.create(req.body);
            res.status(200).json({
                message: 'Book added successfuly',
                book: newBook
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falid to added book`
            });
        }
    }
}

export default BookController;
