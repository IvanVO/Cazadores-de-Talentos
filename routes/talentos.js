import { Router } from 'express';
import {newTalento} from '../controller/talentos.controller.js' 

export const routerTalento = Router();

// #/newUser
routerTalento.post('/', newTalento);

export default routerTalento;
