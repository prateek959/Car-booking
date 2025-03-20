import express from 'express';
import { getUserDetails, login, register, updateDetail } from '../controller/user.controller.js';
import { checkToken } from '../middlewear/auth.middlewear.js';

const userRouter = express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.get('/get',checkToken,getUserDetails);
userRouter.put('/update',checkToken,updateDetail);

export default userRouter