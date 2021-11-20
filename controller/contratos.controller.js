import contract from '../models/contrato.js'

const showAllA = async (req, res) => {
    const usuarios = await contract.findAll();
    console.log(usuarios);
}

export const newContrato = async (req, res) => {
    console.log('Request Body:');
    console.log(req.body);
    let {id,proyectname,description,duration,hunter,talent,totalprice} = req.body;
    try {
        let insertContrato = await contract.create({
            id,
            proyectname,
            description,
            duration,
            hunter,
            talent,
            totalprice
        });
        if (insertContrato) {
            console.log('Nuevo registro');
            res.json({
                mensaje: 'Nuevo usuario registrado',
                data: insertContrato
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