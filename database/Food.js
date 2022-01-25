const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const Food = db.define('food', {
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: sequelize.REAL,
      allowNull: false,
      validate:{
        //check if password contain uppercase and lowercase and ...
      }
    },
    image: {
        type: sequelize.STRING
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    type: {
        type: sequelize.STRING,
        allowNull: false
    }
},
{
  timestamps : false
})

module.exports = Food