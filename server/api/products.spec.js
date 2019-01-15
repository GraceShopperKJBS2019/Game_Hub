const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = request.agent(app)
const Product = db.model('product')

describe('Tier Two - API Routes', () => {
  describe('Product routes', () => {
    beforeEach(() => {
      return db.sync({force: true})
    })

    describe('/api/products/', () => {
      const game = 'Atlas'

      beforeEach(() => {
        return Product.create({
          name: game,
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
      describe('GET /products', () => {
        it('retrieves all products', async () => {
          const response = await request(app)
            .get('/api/products')
            .expect(200)

          expect(response.body).to.be.an('array')
          expect(response.body[0].name).to.be.equal(game)
        })
      })

      describe('GET api/products/:productID', () => {
        it('retrieves a single product by their productID', () => {
          return agent
            .get(`/products/${productID}`)
            .expect(200)
            .expect(res => {
              expect(res.body.name).to.equal('Atlas')
            })
        })
      })
    })
  })
})
