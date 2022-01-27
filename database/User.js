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
    },
    address: {
        type: sequelize.STRING
    },
    city: {
        type: sequelize.STRING
    },
    state: {
        type: sequelize.STRING
    },
    zip: {
        type: sequelize.INTEGER,
        validate:{
          check(zip){
            if (!(/^\d{5}$/.test(zip))){
              throw new Error('zip code incorrect')
            }
          }
        }
    }
})

module.exports = User