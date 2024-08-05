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
}

export default UserController;
