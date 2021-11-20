import user from '../models/usuario.js'

const showAllA = async (req, res) => {
    const usuarios = await user.findAll();
    console.log(usuarios);
}

export const newUsuario = async (req, res) => {
    console.log('Request Body:');
    console.log(req.body);
    const { id,full_name,age,email,phone,linkedin,reputacion,usertype} = req.body;
    try {
        let insertUser = await user.create({
            id, 
            full_name, 
            age, 
            email,
            phone,
            linkedin,
            reputacion,
            usertype
        });
        if (insertUser) {
            console.log('Nuevo registro');
            res.json({
                mensaje: 'Nuevo usuario registrado',
                data: insertUser
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