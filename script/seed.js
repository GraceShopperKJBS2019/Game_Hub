'use strict'
const db = require('../server/db')
const {
  User,
  Product,
  Review,
  Cart,
  OrderHistory
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'jane.doe@gmail.com',
      password: '123',
      firstName: 'Jane',
      lastName: 'Doe',
      admin: false,
      phoneNumber: '7321239876',
      billingAddress: '12 Wall Street, New York City, NY 10005'
    }),
    User.create({
      email: 'bobbo@gmail.com',
      password: '456',
      firstName: 'Bob',
      lastName: 'Bo',
      admin: false,
      phoneNumber: '9673212891',
      billingAddress: '84th Street, New York City, NY 10024'
    }),
    User.create({
      email: 'john.smith@gmail.com',
      password: '789',
      firstName: 'John',
      lastName: 'Smith',
      admin: false,
      phoneNumber: '2013278910',
      billingAddress: '34 Street, New York City, NY 10001'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const products = await Promise.all([
    Product.create({
      name: 'Atlas',
      imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/ATLAS.jpg',
      msrp: 5999,
      currentPrice: 2999,
      console: 'PC',
      description:
        'ATLAS: The ultimate survival MMO of unprecedented scale with 40,000+ simultaneous players in the same world. Join an endless adventure of piracy & sailing, exploration & combat, roleplaying & progression, settlement & civilization-building, in one of the largest game worlds ever! Explore, Build, Conquer!',
      inventory: 100,
      releaseDate: '2018-12-19'
    }),
    Product.create({
      name: 'Grim Dawn',
      imageUrl:
        'https://hb.imgix.net/18eda5bccfb1095c66c64d0fdafef3983355ec5e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=795903240797be65dc1617609f66f03a',
      msrp: 2999,
      currentPrice: 2499,
      console: 'PC',
      description:
        'Enter an apocalyptic fantasy world where humanity is on the brink of extinction, iron is valued above gold and trust is hard earned. This ARPG features complex character development, hundreds of unique items, crafting and quests with choice & consequence.',
      inventory: 100,
      releaseDate: '2012-11-20'
    }),
    Product.create({
      name: 'Fortnite',
      imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite.jpg',
      msrp: 3999,
      currentPrice: 2000,
      console: 'xbox',
      description:
        'Fortnite Battle Royale is the completely free 100-player PvP mode in Fortnite. One giant map. A battle bus. Fortnite building skills and destructible environments combined with intense PvP combat. The last one standing wins.',
      inventory: 50,
      releaseDate: '2017-05-14'
    }),
    Product.create({
      name: 'Fifa19',
      imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2019.jpg',
      msrp: 5999,
      currentPrice: 2499,
      console: 'xbox',
      description:
        'Powered by Frostbite™*, EA SPORTS™ FIFA 19 delivers a champion-caliber experience on and off the pitch. Led by the prestigious UEFA Champions League, FIFA 19 offers enhanced gameplay features that allow you to control the pitch in every moment, and provides new and unrivaled ways to play, including a dramatic finale to the story of Alex Hunter in The Journey: Champions, a new mode in the ever-popular FIFA Ultimate Team™, and more.',
      inventory: 50,
      releaseDate: '2019-04-20'
    }),
    Product.create({
      name: 'Mario Cart 8 Deluxe',
      imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/Mario%20Kart%208.jpg',
      msrp: 7999,
      currentPrice: 5599,
      console: 'switch',
      description:
        'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. ',
      inventory: 75,
      releaseDate: '2017-04-28'
    }),
    Product.create({
      name: 'Super Smash Bros Ultimate',
      imageUrl:
        'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Smash%20Bros.%20Ultimate.jpg',
      msrp: 7999,
      currentPrice: 7999,
      console: 'switch',
      description:
        'Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. ',
      inventory: 150,
      releaseDate: '2018-12-07'
    }),
    Product.create({
      name: 'Call of Duty Black Ops 4',
      imageUrl:
        'https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty%3A%20Black%20Ops%204.jpg',
      msrp: 5999,
      currentPrice: 4499,
      console: 'playstation',
      description:
        'The Black Ops series explodes back onto PS4 with incredible new multiplayer game modes – including intense, large-scale skirmishes in battle-royale style Blackout matches.',
      inventory: 100,
      releaseDate: '2018-10-12'
    }),
    Product.create({
      name: 'Shadow of the Tomb Raider',
      imageUrl:
        'https://static-cdn.jtvnw.net/ttv-boxart/Shadow%20of%20the%20Tomb%20Raider.jpg',
      msrp: 5999,
      currentPrice: 3499,
      console: 'playstation',
      description:
        'Join Lara Croft in the perilous jungles of South America as she fights to save the world from a Mayan apocalypse and fulfil her destiny to become the Tomb Raider.',
      inventory: 50,
      releaseDate: '2018-09-14'
    })
  ])

  console.log(`seeded ${products.length} products`)
  console.log(`seeded products successfully`)

  const reviews = await Promise.all([
    Review.create({
      title: 'Great!',
      text: 'I would recommend this game, it is woderful!',
      rating: 5,
      userId: 1,
      productId: 1
    }),
    Review.create({
      title: 'Okay',
      text: 'I wanted to like this game more, but still a solid 3 stars!',
      rating: 3,
      userId: 2,
      productId: 1
    }),
    Review.create({
      title: 'Great!',
      text: 'I would recommend this game, it is woderful!',
      rating: 5,
      userId: 1,
      productId: 2
    }),
    Review.create({
      title: 'Okay',
      text: 'I wanted to like this game more, but still a solid 3 stars!',
      rating: 3,
      userId: 2,
      productId: 2
    })
  ])
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded reviews successfully`)

  const carts = await Promise.all([
    Cart.create({
      userId: 1,
      productId: 1
    }),
    Cart.create({
      userId: 1,
      productId: 2
    }),
    Cart.create({
      userId: 1,
      productId: 2
    }),
    Cart.create({
      userId: 2,
      productId: 2
    })
  ])
  console.log(`seeded ${carts.length} carts`)
  console.log(`seeded carts successfully`)

  const Orders = await Promise.all([
    OrderHistory.create({
      productName: 'Grim Dawn',
      imageURL:
        'https://hb.imgix.net/18eda5bccfb1095c66c64d0fdafef3983355ec5e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=795903240797be65dc1617609f66f03a',
      checkoutPrice: 2555,
      userId: 1
    }),
    OrderHistory.create({
      productName: 'Grim Dawn',
      imageURL:
        'https://hb.imgix.net/18eda5bccfb1095c66c64d0fdafef3983355ec5e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=795903240797be65dc1617609f66f03a',
      checkoutPrice: 2555,
      userId: 1
    }),

    OrderHistory.create({
      productName: 'Grim Dawn',
      imageURL:
        'https://hb.imgix.net/18eda5bccfb1095c66c64d0fdafef3983355ec5e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=795903240797be65dc1617609f66f03a',
      checkoutPrice: 2555,
      userId: 2
    })
  ])
  console.log(`seeded ${Orders.length} order history`)
  console.log(`seeded order history successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
