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
    },
    qty: {
      type: sequelize.INTEGER,
      defaultValue:1,
      noUpdate : true
  }
},
{
  updatedAt: false
})

module.exports = Food