const chai = require('chai')
const expect = chai.expect
const db = require('../index')
const Product = require('./product')
const Cart = db.model('cart')

describe('Tier One - Back-end', () => {
  describe('Products model', () => {
    beforeEach(() => {
      return db.sync({force: true})
    })

    describe('Product/Cart association', async () => {
      let cart1, cart3, game1

      beforeEach(async () => {
        cart1 = await Cart.create({
          productId: 1
        })

        await Cart.create({
          productId: 2
        })

        cart3 = await Cart.create({
          productId: 2
        })

        game1 = await Product.create({
          id: 1,
          name: 'Atlas',
          imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/ATLAS.jpg',
          msrp: '5999',
          currentPrice: '2999',
          console: 'PC',
          description:
            'ATLAS: The ultimate survival MMO of unprecedented scale with 40,000+ simultaneous players in the same world. Join an endless adventure of piracy & sailing, exploration & combat, roleplaying & progression, settlement & civilization-building, in one of the largest game worlds ever! Explore, Build, Conquer!',
          inventory: 100,
          releaseDate: new Date(2018, 12, 18)
        })

        await Product.create({
          id: 2,
          name: 'Grim Dawn',
          imageUrl:
            'https://hb.imgix.net/18eda5bccfb1095c66c64d0fdafef3983355ec5e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=795903240797be65dc1617609f66f03a',
          msrp: '2999',
          currentPrice: '2499',
          console: 'PC',
          description:
            'Enter an apocalyptic fantasy world where humanity is on the brink of extinction, iron is valued above gold and trust is hard earned. This ARPG features complex character development, hundreds of unique items, crafting and quests with choice & consequence.',
          inventory: 100,
          releaseDate: new Date(2012, 11, 19)
        })
      })

      describe('Product', () => {
        it('has associated carts', async () => {
          const test1 = await Cart.findOne({
            where: {
              id: cart1.id
            },
            include: [
              {
                model: Product
              }
            ]
          })

          // test1.Product !== null == PASS
          const result = await game1.hasCarts([cart1, cart3])
          expect(result).to.be(true)
        })
      })

      describe('Cart', () => {
        it('belongs to a product', async () => {
          const newCart = Cart.create({
            productId: 1
          })
          const newProduct = Product.create({
            id: 1,
            name: 'Atlas'
          })
          return Promise.all([newCart, newProduct])
            .spread((createdCart, createdProduct) => {
              return createdProduct.setCart(createdCart)
            })
            .then(() => {
              return Product.findOne({
                where: {id: 1},
                include: {model: Cart}
              })
            })
            .then(foundProduct => {
              expect(foundProduct).to.exist
              expect(foundProduct.Cart.name).to.equal('Atlas')
            })
        })
      })
    })
  })
})
