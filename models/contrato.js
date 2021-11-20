import { Sequelize} from 'sequelize';
import db from '../database/connection.js';

const contract = db.define('contratos',{
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull: false
    },
    proyectname:{
        type:Sequelize.DataTypes.TEXT
    },
    description:{
        type: Sequelize.DataTypes.TEXT,
    },
    duration:{
        type:Sequelize.DataTypes.INTEGER
    },
    hunter:{
        type: Sequelize.DataTypes.TEXT,
    },
    talent:{
        type: Sequelize.DataTypes.TEXT,
    },
    totalprice:{
        type: Sequelize.DataTypes.INTEGER,
    }
},{
    timestamps: false
});

export default contract;