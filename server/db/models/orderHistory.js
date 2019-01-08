const Sequelize = require('sequelize')
const db = require('../db')

// ID, userID (through association), transaction description = {DATE, GAMES, TOTAL COST, ADDRESS, PAYMENT}
const orderHistory = db.define('orderHistory', {
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
  address: {
    type: Sequelize.STRING
  },
  payment: {
    type: Sequelize.STRING
  }
})

module.exports = orderHistory
