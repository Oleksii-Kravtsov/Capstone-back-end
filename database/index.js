const Sequelize = require('sequelize')
const User = require('./User')
const Food = require('./Food')
const PusrchaseHistory = require('./purchaseHistory')
const FoodHistory = require('./foodHistory')
const db = require('./database')

//Association 

User.hasMany(PusrchaseHistory,{
    foreignKey: {
        allowNull: false
    }
})
PusrchaseHistory.belongsTo(User,{
    foreignKey: {
        allowNull: false
    }
}) //fk user_id in purchase_history table

PusrchaseHistory.hasMany(FoodHistory,{
    foreignKey: {
        allowNull: false
    }
})
FoodHistory.belongsTo(PusrchaseHistory,{
    foreignKey: {
        allowNull: false
    }
}) //fk PusrchaseHistory_id in food_history table
FoodHistory.belongsTo(Food,{
    foreignKey: {
        allowNull: false
    }
}) //fk food_id in food_history table

module.exports = {
    User,
    Food,
    PusrchaseHistory,
    FoodHistory,
    db
}