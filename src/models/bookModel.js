import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        title: { type: String, require: true },
        author: { type: String },
        availableCopies: { type: Number, require: true }
    },
    { versionKey: false }
);

const bookModel = mongoose.model('books', bookSchema);

export { bookSchema, bookModel };
