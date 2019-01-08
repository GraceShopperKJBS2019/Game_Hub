'use strict'
const db = require('../server/db')
const {User} = require('../server/db/models')

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
      phoneNumber: 7321239876,
      billingAddress: '12 Wall Street, New York City, NY 10005'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '456',
      firstName: 'Bob',
      lastName: 'Bo',
      admin: false,
      phoneNumber: 9673212891,
      billingAddress: '84th Street, New York City, NY 10024'
    }),
    User.create({
      email: 'john.smith@gmail.com',
      password: '789',
      firstName: 'John',
      lastName: 'Smith',
      admin: false,
      phoneNumber: 2013278910,
      billingAddress: '34 Street, New York City, NY 10001'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
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
