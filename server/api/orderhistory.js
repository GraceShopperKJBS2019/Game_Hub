const router = require('express').Router()
const {OrderHistory} = require('../db/models')
module.exports = router

// /api/orderhistory get all order history
router.get('/', async (req, res, next) => {
  try {
    if (!req.user || !req.user.admin) {
      res.send(
        'go to bestgraceshopper.herokuapp.com instead if you wanna hack somebody'
      )
    } else {
      const orders = await OrderHistory.findAll()
      res.send(orders)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    if (Number(req.params.userId) === req.user.id || req.user.admin) {
      const userOrders = await OrderHistory.findAll({
        where: {
          userId: req.params.userId
        }
      })
      res.send(userOrders)
    } else {
      res.status(403)
      res.send(
        'go to bestgraceshopper.herokuapp.com instead if you wanna hack somebody'
      )
    }
  } catch (error) {
    next(error)
  }
})

router.post('/:userId', async (req, res, next) => {
  try {
    const toCreate = await Promise.all(
      req.body.map(elem => {
        return OrderHistory.create({
          productName: elem.product.name,
          imageURL: elem.product.imageUrl,
          checkoutPrice: elem.product.currentPrice,
          userId: req.params.userId
        })
      })
    )
    console.log(toCreate)
    res.send(toCreate)
  } catch (error) {
    next(error)
  }
})
