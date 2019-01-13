const router = require('express').Router()
const {User, Product, Cart} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//
router.get('/:userId/cart', async (req, res, next) => {
  try {
    const cartItems = await Cart.findAll({
      where: {
        userId: req.params.userId
      },
      include: [
        {
          model: Product
        }
      ]
    })
    res.send(cartItems)
  } catch (error) {
    next(error)
  }
  // router.post('/:userId/cart', async (req, res, next) => {
  //   try {
  //     const itemToBeAdded = await Cart.create({
  //       userId: req.params.userId,
  //       productId: req.body.productId
  //     });
  //   } catch (error){
  //     next(error);
  //   }

  // })
})
router.post('/', async function(req, res, next) {
  try {
    const exists = await Student.findOne({
      where: {id: req.body.id}
    })
    if (!exists) {
      const newStudent = await Student.create(req.body)
      res.status(201)
      res.send(newStudent)
    } else {
      res.sendStatus(303)
    }
  } catch (error) {
    next(error)
  }
})
