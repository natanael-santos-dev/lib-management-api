import mongoose from 'mongoose';
import { userSchema } from './userModel.js';
import { bookSchema } from './bookModel.js';

const loanSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        user: userSchema,
        book: bookSchema,
        loanDate: { type: Date },
        dueDate: { type: Date },
        returnDate: { type: Date }
    },
    { versionKey: false }
);
const loanModel = mongoose.model('loans', loanSchema);

export default loanModel;
