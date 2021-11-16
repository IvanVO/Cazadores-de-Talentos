import {app, router, mypath} from './config.mjs';

router.get('/', function(req, res){
    res.render('./public/index.html');
});