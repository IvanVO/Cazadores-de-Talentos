import { Router } from 'express';
import {newCazador} from '../controller/cazador.controler.js' 

export const routerCazador = Router();

// #/newUser
routerCazador.post('/', newCazador);

export default routerCazador;