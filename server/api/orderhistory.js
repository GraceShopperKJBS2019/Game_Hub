const router = require('express').Router()
const {OrderHistory} = require('../db/models')
module.exports = router

// /api/orderhistory get all order history
router.get('/', async (req, res, next) => {
  try {
    const orders = await OrderHistory.findAll()
    res.send(orders)
  } catch (error) {
    next(error)
  }
})

router.get('/:userId', async (req, res, next) => {
  // console.log(req.params.userId)
  try {
    const userOrders = await OrderHistory.findAll({
      where: {
        userId: req.params.userId
      }
    })
    // console.log(userOrders)

    res.send(userOrders)
  } catch (error) {
    next(error)
  }
})

router.post('/guestCheckout', async (req, res, next) => {
  // console.log(req.body);
  try {
    const toCreate = await Promise.all(
      req.body.cart.map(elem => {
        return OrderHistory.create({
          productName: elem.name,
          imageURL: elem.imageUrl,
          checkoutPrice: elem.currentPrice,
          userId: null,
          email: req.body.email,
          address: req.body.address
        })
      })
    )
    res.send(toCreate)
  } catch (error) {
    next(error)
  }
})
router.post('/:userId', async (req, res, next) => {
  try {
    const toCreate = await Promise.all(
      req.body.cart.map(elem => {
        return OrderHistory.create({
          productName: elem.product.name,
          imageURL: elem.product.imageUrl,
          checkoutPrice: elem.product.currentPrice,
          userId: req.params.userId,
          email: req.body.userEmail,
          address: req.body.address
        })
      })
    )
    res.send(toCreate)
  } catch (error) {
    next(error)
  }
})
