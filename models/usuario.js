import { Sequelize} from 'sequelize';
import db from '../database/connection.js';
import cazador from './cazador.js';
import talento from './talento.js';

const user = db.define('users',{
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false
    },
    full_name:{
        type: Sequelize.DataTypes.TEXT,
        primaryKey:true,
        allowNull:false
    },
    age:{
        type: Sequelize.DataTypes.INTEGER
    },
    email:{
        type: Sequelize.DataTypes.TEXT,
    },
    phone:{
        type: Sequelize.DataTypes.BIGINT,
    },
    linkedin:{
        type: Sequelize.DataTypes.TEXT,
    },
    reputacion:{
        type: Sequelize.DataTypes.INTEGER
    },
    usertype:{
        type: Sequelize.DataTypes.ENUM('Cazador','Talento')
    },
},{
    timestamps: false
});


user.hasMany(cazador,{foreignKey:'full_name', sourceKey: 'full_name'});
cazador.belongsTo(user,{foreignKey:'full_name', sourceKey: 'full_name'});

user.hasMany(talento,{foreignKey:'full_name', sourceKey: 'full_name'});
talento.belongsTo(user,{foreignKey:'full_name', sourceKey: 'full_name'});
export default user;