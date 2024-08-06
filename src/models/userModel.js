import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String }
    },
    { versionKey: false }
);

const userModel = mongoose.model('users', userSchema);

export default userModel;
