import {app, router, mypath} from './config.mjs';
var talentHunters = [];

const projectInfo = {
    project1: {
        title: 'Desarrollo de Apps en iOS',
        hunter: 'Aurora Stone'
    },
    project2: {
        title: 'Interno en análisis de datos',
        hunter: 'Michael Ertay'
    },
    project3: {
        title: 'Desarrollo Web con JS',
        hunter: 'Hailey Rhode'
    }
}

for(const project in projectInfo) {
    for(const [key, value] of Object.entries(projectInfo[project])) {
        if(key === 'hunter') {
            talentHunters.push(value)
        }
    }
}

router.get('/', function(req, res){
    res.render('index', {title: projectInfo, registro: talentHunters});
});

router.get('/proveedores', function(req, res){
    res.render('proveedores');
});

router.get('/perfilCazador', function(req, res){
    res.render('perfilCazador');
});

router.get('/registerProject', function(req, res){
    res.render('registerProject');
});

router.get('/registerTalent', function(req, res){
    res.render('registerTalent');
});

router.get('/proyectInscription', function(req, res){
    res.render('proyectInscription');
});

router.get('/perfilProveedor', function(req, res){
    res.render('perfilProveedor');
});

router.get('/registroUsuario', function(req, res){
    res.render('signup');
});