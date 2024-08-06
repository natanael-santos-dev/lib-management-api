import bookModel from '../models/bookModel.js';

class BookController {
    static async getBook(req, res) {
        try {
            const books = await bookModel.find({});
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falid to search books`
            });
        }
    }
}

export default BookController;
