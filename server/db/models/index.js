const User = require('./user')
const Product = require('./product')
const OrderHistory = require('./orderHistory')
const Cart = require('./cart')
const Review = require('./reviews')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// GAMEHUB associations
OrderHistory.belongsTo(User)
User.hasMany(OrderHistory)

// User.hasOne(Cart)
// Cart.hasMany(Product)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

User.hasMany(Cart)
Cart.belongsTo(User)

Product.hasMany(Cart)
Cart.belongsTo(Product)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  OrderHistory,
  Review,
  Cart
}
