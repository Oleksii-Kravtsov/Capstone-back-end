const Sequelize = require('sequelize')
const User = require('./User')
const Food = require('./Food')
const PusrchaseHistory = require('./purchaseHistory')
const foodHistory = require('./foodHistory')
const db = require('./database')

//Association 

// Campus.hasMany(Student)
// Student.belongsTo(Campus) //add a foreign key to Student table (campusId)

module.exports = {
    User,
    Food,
    PusrchaseHistory,
    foodHistory,
    db
}
