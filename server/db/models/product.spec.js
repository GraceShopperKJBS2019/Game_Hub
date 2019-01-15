const chai = require('chai')
const expect = chai.expect
const db = require('../index')
const Product = db.model('product')

describe('Tier One - Back-end', () => {
  describe('Product model', () => {
    beforeEach(() => {
      return db.sync({force: true})
    })

    describe('attributes definition', () => {
      let game

      beforeEach(async () => {
        game = await Product.create({
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
      })

      it('should find a Product', () => {
        return game.save().then(savedGame => {
          expect(savedGame).to.be.a('Object')
        })
      })

      it('includes `name` field', () => {
        return game.save().then(savedGame => {
          expect(savedGame.name).to.equal('Atlas')
        })
      })

      it('requires `name` to not be an empty string', async () => {
        const product = Product.build({
          name: ''
        })

        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed if name is an empty string'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation error')
          /* handle error */
        }
      })

      it('includes `imageUrl` field', () => {
        return game.save().then(savedGame => {
          expect(savedGame).to.have.property('imageUrl')
        })
      })

      it('returns the msrp', () => {
        return game.save().then(savedGame => {
          expect(savedGame.msrp).to.equal(5999)
        })
      })

      it('returns the current price', () => {
        return game.save().then(savedGame => {
          expect(savedGame.currentPrice).to.equal(2999)
        })
      })

      it('includes `console` field', () => {
        return game.save().then(savedGame => {
          expect(savedGame).to.have.property('console')
        })
      })

      it('requires `console` to not be an empty string', async () => {
        const product = Product.build({
          console: ''
        })
        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed if name is an empty string'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation error')
          /* handle error */
        }
      })

      it('includes `description` field', () => {
        return game.save().then(savedGame => {
          expect(savedGame.description).to.equal(
            'ATLAS: The ultimate survival MMO of unprecedented scale with 40,000+ simultaneous players in the same world. Join an endless adventure of piracy & sailing, exploration & combat, roleplaying & progression, settlement & civilization-building, in one of the largest game worlds ever! Explore, Build, Conquer!'
          )
        })
      })

      it('includes `inventory` field', () => {
        return game.save().then(savedGame => {
          expect(savedGame).to.have.property('inventory')
        })
      })

      it('includes `releaseDate` field', () => {
        return game.save().then(savedGame => {
          expect(savedGame).to.have.property('releaseDate')
        })
      })
    })
  })
})
