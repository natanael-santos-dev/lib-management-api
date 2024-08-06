import userModel from '../models/userModel.js';

class UserController {
    static async getUsers(req, res) {
        try {
            const users = await userModel.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falid to search users`
            });
        }
    }

    static async getUser(req, res) {
        try {
            const id = req.params.id;
            const user = await userModel.findById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falid to search user`
            });
        }
    }

    static async createUser(req, res) {
        try {
            const newUser = await userModel.create(req.body);
            res.status(201).json({
                message: 'User created successfuly',
                user: newUser
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falid to create user`
            });
        }
    }

    static async updateUser(req, res) {
        try {
            const id = req.params.id;
            await userModel.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'User updating successfuly' });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falid to update user`
            });
        }
    }
}

export default UserController;
