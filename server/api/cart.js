const router = require('express').Router()
const {Cart, Product} = require('../db/models/')

// post a product, full route /api/products

router.put('/:productId', async (req, res, next) => {
  try {
    const productAddedToCart = await Product.findOne({
      where: {
        id: req.params.productId
      },
      include: [{all: true}]
    })
    let updatedCart = await Cart.update(req.body.totalPrice)
    res.send(updatedCart)
  } catch (error) {
    next(error)
  }
})

module.exports = router
