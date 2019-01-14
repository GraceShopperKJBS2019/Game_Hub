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

router.post('/:userId', async (req, res, next) => {
  try {
    const toCreate = await OrderHistory.create({
      productName: req.body.productName,
      imageURL: req.body.imageURL,
      checkoutPrice: req.body.checkoutPrice,
      userId: req.params.userId
    })
    res.send(toCreate)
  } catch (error) {
    next(error)
  }
})
