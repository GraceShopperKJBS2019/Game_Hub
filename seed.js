const {db} = require('./server/db')
const {green, red} = require('chalk')
const {User} = require('./server/db/models')

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!
  // USERS
  const user1 = await User.create({
    email: 'jane.doe@gmail.com',
    firstName: 'Jane',
    lastName: 'Doe',
    admin: false,
    phoneNumber: 7321239876,
    billingAddress: '12 Wall Street, New York City, NY 10005'
  })

  const user2 = await User.create({
    email: 'bobbo@gmail.com',
    firstName: 'Bob',
    lastName: 'Bo',
    admin: false,
    phoneNumber: 9673212891,
    billingAddress: '84th Street, New York City, NY 10024'
  })

  const user3 = await User.create({
    email: 'john.smith@gmail.com',
    firstName: 'John',
    lastName: 'Smith',
    admin: false,
    phoneNumber: 2013278910,
    billingAddress: '34 Street, New York City, NY 10001'
  })

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
