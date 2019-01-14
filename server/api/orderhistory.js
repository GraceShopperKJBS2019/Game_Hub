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
