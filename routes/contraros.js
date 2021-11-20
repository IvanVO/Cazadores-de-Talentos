import { Router } from 'express';
import { newContrato } from '../controller/contratos.controller.js';

export const routerContrato= Router();

// #/newUser
routerContrato.post('/', newContrato);

export default routerContrato;