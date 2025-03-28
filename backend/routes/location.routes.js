import express from 'express';
import { checkToken } from '../middlewear/auth.middlewear.js';
import { getData } from '../controller/user.controller.js';

const locationRouter = express.Router();

locationRouter.get('/get?',checkToken,getData);

export default locationRouter;
