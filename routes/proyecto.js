import { Router } from 'express';
import {newProyect} from '../controller/proyectos.controller.js' 

export const routerProyecto= Router();

// #/newUser
routerProyecto.post('/', newProyect);

export default routerProyecto;