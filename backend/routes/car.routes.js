import express from 'express';
import { checkToken } from '../middlewear/auth.middlewear.js';
import { createData, deleteData, getPresonalData, updateData } from '../controller/car.controller.js';

const carRouter = express.Router();

carRouter.post('/create',checkToken,createData);
carRouter.get('/get',checkToken,getPresonalData);
carRouter.put('/update/:carId',checkToken,updateData);
carRouter.delete('/delete/:carId',checkToken,deleteData);

export default carRouter