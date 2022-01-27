const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const User = db.define('user', {
    email: {
        type: sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: {
            msg : 'Please enter your email'
          },  
          isEmail:{
            msg : 'Please enter a validate email'
          }
        }
    }
})

module.exports = User