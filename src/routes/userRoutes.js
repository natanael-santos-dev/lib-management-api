import express from 'express';
import UserController from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.get('/users', UserController.getUsers);

export default userRoutes;
