const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const User = db.define('user', {
    username: {
      type: sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
      validate:{
        //check if password contain uppercase and lowercase and ...
      }
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        validate:{
          isEmail: true,
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