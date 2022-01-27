const sequelize = require ("sequelize")
const db = require('./database')

//Campus table
//..../api/purchaseHistory
const PusrchaseHistory = db.define('purchase_history', {
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
        validator: function(v) {
          const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/
          if(!phoneValidationRegex.test(v)){
            throw new Error ('xxx-xxx-xxxx')
          }
        },
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
    },
    order_complete:{
      type : sequelize.BOOLEAN
    }
  },{
  updatedAt: false
})

module.exports = PusrchaseHistory