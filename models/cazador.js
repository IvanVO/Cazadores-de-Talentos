import { Sequelize } from 'sequelize';
import db from '../database/connection.js';
import proyecto from './proyecto.js';
import speedDate from './speedDate.js';
import contract from './contrato.js';

const cazador = db.define('perfilcazadors',{
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false
    },
    full_name:{
        type: Sequelize.DataTypes.TEXT,
        primaryKey:true,
    },    
    location:{
        type: Sequelize.DataTypes.TEXT,
    },
    proyectos_name:{
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.TEXT)
    },
    giroproy:{
        type: Sequelize.DataTypes.TEXT
    },
},{
    timestamps: false
});

cazador.hasMany(proyecto,{foreignKey:'hunter', sourceKey: 'full_name'});
proyecto.belongsTo(cazador,{foreignKey:'hunter', sourceKey: 'full_name'});

cazador.hasMany(speedDate,{foreignKey:'hunter', sourceKey: 'full_name'});
speedDate.belongsTo(cazador,{foreignKey:'hunter', sourceKey: 'full_name'});

cazador.hasMany(contract,{foreignKey:'hunter', sourceKey: 'full_name'});
contract.belongsTo(cazador,{foreignKey:'hunter', sourceKey: 'full_name'});

export default cazador;