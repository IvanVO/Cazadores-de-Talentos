import express from 'express';
import 'ejs';
import path from 'path';


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

app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', router);

app.listen(3000, () => {
    console.log('Server is runing on port 3000');
});

