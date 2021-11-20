import proyecto from '../models/proyecto.js'

const showAllA = async (req, res) => {
    const usuarios = await proyecto.findAll();
    console.log(usuarios);
}

export const newProyect = async (req, res) => {
    console.log('Request Body:');
    console.log(req.body);
    let {id,name,hunter,assigned} = req.body;
    try {
        let insertProyecto = await proyecto.create({
            id,
            name, 
            hunter, 
            assigned,
        });
        if (insertProyecto) {
            console.log('Nuevo registro');
            res.json({
                mensaje: 'Nuevo usuario registrado',
                data: insertProyecto
            });
        }
    } catch (err) {
        console.log(err);
        console.log('Fallo el registro');
        res.status(500).json({
            mensaje: 'Algo ha ido mal',
            data: {}
        });
    }
};