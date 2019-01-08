const Sequelize = require('sequelize')
const db = require('../db')
/*create Sequelize models for product data, should include:

name, imageURL, msrp, current price, console, description, inventory count
*/

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  msrp: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  currentPrice: {
    type: Sequelize.DECIMAL
  },
  console: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Product
