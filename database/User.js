const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const User = db.define('user', {
    username: {
      type: sequelize.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg : 'Please enter your email'
        }
      }
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
      validate:{
        check(password){
          if (password.length<8&& !(/[a-z]/.test(password) && !(/[A-Z]/.test(password)) && !(/[0-9]/.test(password)))){
            throw new Error(`\u2022 Password Length must be greater than 8 \u2022 include a Uppercase \u2022 include a Lowercase \u2022 include a Number`)
          }
        }
      }
    },
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