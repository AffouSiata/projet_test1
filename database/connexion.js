const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('projet1', 'postgres', 'affou2021', {
    dialect:  'postgres' ,
    host: '127.0.0.1',
    port:'5432'
});
module.exports =sequelize;
