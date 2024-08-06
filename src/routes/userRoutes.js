import express from 'express';
import UserController from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.get('/users', UserController.getUsers);

userRoutes.get('/users/:id', UserController.getUser);

userRoutes.post('/users', UserController.createUser);

userRoutes.put('/users/:id', UserController.updateUser);

export default userRoutes;
