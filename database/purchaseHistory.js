const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const PusrchaseHistory = db.define('purchase_history', {
    user_id: {
      type: sequelize.STRING,
      allowNull: false,
    },
    date: {
        type: sequelize.DATE,
        allowNull: false,
    }
})

module.exports = PusrchaseHistory