const router = require('express').Router()
const {Cart} = require('../db/models/')

// update cart's total price, full route /api/users

router.put('/users/:id/cart', async (req, res, next) => {
  try {
    let updatedCart = await Cart.update(req.body.totalPrice)
    res.send(updatedCart)
  } catch (error) {
    next(error)
  }
})

router.delete('/users/:userId/cart/', async (req, res, next) => {
  try {
    const destroyedCart = await Cart.destroy({where: {id: req.params.userId}})
    res.send(destroyedCart)
  } catch (error) {
    next(error)
  }
})

module.exports = router
