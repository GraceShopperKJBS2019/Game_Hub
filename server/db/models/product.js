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
    type: Sequelize.INTEGER,
    allowNull: false
  },
  currentPrice: {
    type: Sequelize.INTEGER
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
  },
  releaseDate: {
    type: Sequelize.DATE
  }
})

module.exports = Product
