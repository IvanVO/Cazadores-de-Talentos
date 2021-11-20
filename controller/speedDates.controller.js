import speedDates from '../models/speedDate.js'

const showAllA = async (req, res) => {
    const usuarios = await speedDates.findAll();
    console.log(usuarios);
}

export const newDate = async (req, res) => {
    console.log('Request Body:');
    console.log(req.body);
    let {id,date,time,hunter,talent} = req.body;
    try {
        let insertDate = await speedDates.create({
            id,
            date, 
            time, 
            hunter,
            talent
        });
        if (insertDate) {
            console.log('Nuevo registro');
            res.json({
                mensaje: 'Nuevo usuario registrado',
                data: insertDate
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