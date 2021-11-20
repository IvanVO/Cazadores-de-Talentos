import { Router } from 'express';
import {newUsuario} from '../controller/usuario.controller.js' 

export const routerUser = Router();

// #/newUser
routerUser.post('/', newUsuario);

export default routerUser;