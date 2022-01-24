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
          //valid email
        }
    },
    address: {
        type: sequelize.STRING,
        allowNull: false
    },
    city: {
        type: sequelize.STRING,
        allowNull: false
    },
    state: {
        type: sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: sequelize.INTEGER,
        allowNull: false,
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