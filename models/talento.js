import { Sequelize} from 'sequelize';
import db from '../database/connection.js';

import proyecto from './proyecto.js';
import speedDate from './speedDate.js';

const talento = db.define('perfiltalentos',{
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false
    },
    full_name:{
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        primaryKey:true,
    }, 
    profession:{
        type: Sequelize.DataTypes.TEXT,
    },
    habilities:{
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.TEXT),
        allowNull: false
    },
    check_in:{
        type:Sequelize.DataTypes.TIME,
        allowNull: false
    },
    check_out:{
        type:Sequelize.DataTypes.TIME,
        allowNull: false
    }
},{
    timestamps: false
});


talento.hasMany(speedDate,{foreignKey:'talent', sourceKey: 'full_name'});
speedDate.belongsTo(talento,{foreignKey:'talent', sourceKey: 'full_name'});



export default talento;