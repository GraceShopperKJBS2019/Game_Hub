const Sequelize = require('sequelize')
const db = require('../db')

// ID, userID (through association), transaction description = {DATE, GAMES, TOTAL COST, ADDRESS, PAYMENT}
const OrderHistory = db.define('orderHistory', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.TEXT
  },
  checkoutPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  }
})

module.exports = OrderHistory
