const router = require('express').Router()
const {Product} = require('../db/models/')

// Get all products, full route /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (error) {
    next(error)
  }
})

// Get single product
router.get('/:productID', async (req, res, next) => {
  try {
    const singleProduct = await Product.findById(req.params.productID)
    res.send(singleProduct)
  } catch (error) {
    next(error)
  }
})

module.exports = router
