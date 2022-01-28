const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const User = db.define('user', {
    id: {
        type: sequelize.STRING,
        primaryKey : true
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = User