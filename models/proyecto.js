import { Sequelize} from 'sequelize';
import db from '../database/connection.js';

const proyecto = db.define('proyectos',{
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull: false
    },
    name:{
        type:Sequelize.DataTypes.TEXT
    },
    hunter:{
        type: Sequelize.DataTypes.TEXT,
    },
    assigned:{
        type: Sequelize.DataTypes.BOOLEAN,
    },
},{
    timestamps: false
});

export default proyecto;