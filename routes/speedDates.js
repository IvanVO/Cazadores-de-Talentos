import { Router } from 'express';
import { newDate } from '../controller/speedDates.controller.js';

export const routerDates= Router();

// #/newUser
routerDates.post('/', newDate);

export default routerDates;