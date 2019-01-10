const Sequelize = require('sequelize')
const db = require('../db')

const Reviews = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      max: 5,
      min: 0
    }
  }
})

module.exports = Reviews
