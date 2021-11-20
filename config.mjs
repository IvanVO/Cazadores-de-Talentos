import express from 'express';
import 'ejs';
import path from 'path';

import db from './database/connection.js';
import {routerUser} from './routes/usuario.js';
import {routerCazador} from './routes/cazadores.js';
import {routerTalento} from './routes/talentos.js';
import {routerProyecto} from './routes/proyecto.js';
import routerDates from './routes/speedDates.js';
import routerContrato from './routes/contraros.js';

/* MAIN CONFIGURATION:
* 1. express configuration.
* 2. express router configuration.
* 3. Path configuration
* 4. configutation that parses urlencoded bodies.
* 5. static files configuration (css, plain js, imgs).
* 6. EJS template configuration.
* 7. Server port configuration.
*/
export const app = express();
export const router = express.Router();
export const mypath = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', router);
app.use('/newUser', routerUser);
app.use('/registerH', routerCazador);
app.use('/registerT', routerTalento);
app.use('/registerP', routerProyecto);
app.use('/registerD', routerDates);
app.use('/registerC', routerContrato);

app.listen(3000, () => {
    console.log('Server is runing on port 3000');

    const dbConnection =  async () => {
        try {
            db.authenticate();
            console.log('Data Base are alreary Onlie');
        } catch (err) {
            throw new Error(err);
        }
    };
    dbConnection();
});

