const Sequelize = require('sequelize')
const env = require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_DATABSE);


module.exports = sequelize