const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const FoodHistory = db.define('food_history', {
    qty: {
        type: sequelize.INTEGER,
        allowNull: false,
    }
    //purchase_id and food_id
})

module.exports = FoodHistory