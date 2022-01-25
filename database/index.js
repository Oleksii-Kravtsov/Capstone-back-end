const Sequelize = require('sequelize')
const User = require('./User')
const Food = require('./Food')
const PusrchaseHistory = require('./purchaseHistory')
const FoodHistory = require('./foodHistory')
const db = require('./database')

//Association 

User.hasMany(PusrchaseHistory)
PusrchaseHistory.belongsTo(User) //fk user_id in purchase_history table

PusrchaseHistory.hasMany(FoodHistory)
FoodHistory.belongsTo(PusrchaseHistory) //fk PusrchaseHistory_id in food_history table
FoodHistory.belongsTo(Food) //fk food_id in food_history table

module.exports = {
    User,
    Food,
    PusrchaseHistory,
    FoodHistory,
    db
}
