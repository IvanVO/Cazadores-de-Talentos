import cazador from '../models/cazador.js'

const showAllA = async (req, res) => {
    const usuarios = await cazador.findAll();
    console.log(usuarios);
}

export const newCazador = async (req, res) => {
    console.log('Request Body:');
    console.log(req.body);
    let { id,full_name,location,proyectos_name,giroproy} = req.body;
    proyectos_name = proyectos_name.split(',')
    try {
        let insertCazador = await cazador.create({
            id, 
            full_name, 
            location, 
            proyectos_name,
            giroproy
        });
        if (insertCazador) {
            console.log('Nuevo registro');
            res.json({
                mensaje: 'Nuevo usuario registrado',
                data: insertCazador
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