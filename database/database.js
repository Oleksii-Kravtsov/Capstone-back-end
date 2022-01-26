const Sequelize = require('sequelize')
const env = require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASS, {
    host: process.env.HOST,
    dialect: 'postgres',
    logging : false,
    native:true
});


module.exports = sequelize
