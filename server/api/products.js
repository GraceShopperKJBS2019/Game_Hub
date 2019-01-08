const router = require('express').Router()
const {Product} = require('../db/models/product')

// Get all products, full route /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (error) {
    next(error)
  }
})

module.exports = router
