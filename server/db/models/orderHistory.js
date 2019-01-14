const Sequelize = require('sequelize')
const db = require('../db')

// ID, userID (through association), transaction description = {DATE, GAMES, TOTAL COST, ADDRESS, PAYMENT}
const OrderHistory = db.define('orderHistory', {
  date: {
    type: Sequelize.DATE
  },
  totalCost: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  orders: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
  address: {
    type: Sequelize.STRING
  },
  payment: {
    type: Sequelize.STRING
  }
})

module.exports = OrderHistory
