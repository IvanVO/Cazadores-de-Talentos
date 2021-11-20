import talento from '../models/talento.js'

const showAllA = async (req, res) => {
    const usuarios = await talento.findAll();
    console.log(usuarios);
}

export const newTalento = async (req, res) => {
    console.log('Request Body:');
    console.log(req.body);
    let {id,full_name,profession,habilities,check_in,check_out} = req.body;
    habilities = habilities.split(',')
    try {
        let insertTalento = await talento.create({
            id, 
            full_name, 
            profession, 
            habilities,
            check_in,
            check_out
        });
        if (insertTalento) {
            console.log('Nuevo registro');
            res.json({
                mensaje: 'Nuevo usuario registrado',
                data: insertTalento
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