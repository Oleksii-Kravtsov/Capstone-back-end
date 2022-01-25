const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
const PusrchaseHistory = db.define('purchase_history', {
    user_id: {
      type: sequelize.STRING,
      allowNull: false,
    },
    first_name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: sequelize.STRING,
      allowNull: false,
      validate :{
        //validate the phone number is valide
      }
    }
  },{
  updatedAt: false
})

module.exports = PusrchaseHistory