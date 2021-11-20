import { Sequelize } from 'sequelize';

export const db = new Sequelize('cazadorTalentos','dev','maxi2000sql',{
    host:'localhost',
    dialect: 'postgres',
    pool:{
        max:5,
        min:0,
        require: 30000,
        idle: 10000
    },
    //logging: false
});

export default db;