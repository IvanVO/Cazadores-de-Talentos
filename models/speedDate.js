import { Sequelize} from 'sequelize';
import db from '../database/connection.js';

const speedDate = db.define('speeddates',{
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull: false
    },
    date:{
        type:Sequelize.DataTypes.DATE
    },
    time:{
        type:Sequelize.DataTypes.TIME
    },
    hunter:{
        type: Sequelize.DataTypes.TEXT,
    },
    talent:{
        type: Sequelize.DataTypes.TEXT,
    },
},{
    timestamps: false
});

export default speedDate;