import loanModel from '../models/loanModel.js';
import { bookModel } from '../models/bookModel.js';
import { userModel } from '../models/userModel.js';

const formatDate = (date) => {
    if (!date) return null;
    const formattedDate = new Date(date);
    return formattedDate.toISOString().split('T')[0];
};

class loanController {
    static async createLoan(req, res) {
        const loan = req.body;

        try {
            const bookFound = await bookModel.findById(loan.book);
            const userFound = await userModel.findById(loan.user);

            if (bookFound.availableCopies > 0) {
                const updatedBook = await bookModel.findByIdAndUpdate(
                    loan.book,
                    { $inc: { availableCopies: -1 } },
                    { new: true }
                );

                const newLoan = await loanModel.create({
                    user: { ...userFound._doc },
                    book: { ...updatedBook._doc },
                    loanDate: loan.loanDate,
                    dueDate: loan.dueDate,
                    returnDate: loan.returnDate
                });

                const formattedLoan = {
                    ...newLoan._doc,
                    loanDate: formatDate(newLoan.loanDate),
                    dueDate: formatDate(newLoan.dueDate),
                    returnDate: newLoan.returnDate
                        ? formatDate(newLoan.returnDate)
                        : ''
                };

                res.status(201).json({
                    message: 'Loan created successfully',
                    loan: formattedLoan
                });
            } else {
                res.status(400).json({ message: 'No copies available' });
            }
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - failed to create loan`
            });
        }
    }

    static async closeLoan(req, res) {
        try {
            const id = req.params.id;

            const loanFound = await loanModel.findById(id);

            const updatedBook = await bookModel.findByIdAndUpdate(
                loanFound.book,
                { $inc: { availableCopies: 1 } },
                { new: true }
            );

            const closedLoan = await loanModel.findByIdAndUpdate(
                id,
                { book: updatedBook, returnDate: new Date() },
                { new: true }
            );

            res.status(200).json({
                message: 'Loan closed successfully',
                loan: closedLoan
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - failed to closed loan`
            });
        }
    }
}

export default loanController;
