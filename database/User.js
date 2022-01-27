const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const User = db.define('user', {
    email: {
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = User