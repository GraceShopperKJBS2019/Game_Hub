'use strict'
const db = require('../server/db')
const {User, Product} = require('../server/db/models')

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
      imageUrl:
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjB1-SRmN_fAhUsnOAKHcXxC4wQjRx6BAgBEAU&url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F834910%2FATLAS%2F&psig=AOvVaw1Z4d6mSy9GSH4guEctz5bs&ust=1547071361145373',
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
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiru4rMmN_fAhUtTd8KHQ7gCRoQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGrim_Dawn&psig=AOvVaw3NJIfpK7XXUi4sUnV1CVdS&ust=1547071493522431',
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
      imageUrl:
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjR573bmd_fAhVvm-AKHcV6AtsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.com%2FFortnite-Battle-Royale-Gameplay%2Fdp%2FB07CKCQT6C&psig=AOvVaw0JyhdBlBnhEi6Tt1HJdYmT&ust=1547071792434653',
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
      imageUrl:
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj2orbvmt_fAhWLmuAKHZlnDB4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FFIFA-19-Electronic-Arts-Xbox-One-014633371666%2F310327315&psig=AOvVaw0TB2vwYZ_v-xmIj1LD9fkS&ust=1547072110623678',
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
      imageUrl:
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwivyaHend_fAhVD2oMKHej-DxUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.nintendo.com%2Fgames%2Fdetail%2Fmario-kart-8-deluxe-switch&psig=AOvVaw1cO0U2k-CC-kYrhQElt_ri&ust=1547072879098255',
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
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjbyZrJn9_fAhUtmuAKHfu6BcoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.ign.com%2Farticles%2F2019%2F01%2F04%2Fsuper-smash-bros-ultimate-dlc-roster-reportedly-leaked&psig=AOvVaw1Dn-BJX4HnGUF5MS0NpPGR&ust=1547073373189648',
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
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjxnMGEoN_fAhVNMt8KHWczDfwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.bestbuy.com%2Fsite%2Fcall-of-duty-black-ops-4-playstation-4%2F6216332.p%3FskuId%3D6216332&psig=AOvVaw1P4ZLBHaR1KBJ-geYotOc8&ust=1547073497408123',
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
        'https://www.google.com/url?sa=i&source=imgres&cd=&ved=2ahUKEwjbpLiQod_fAhUqh-AKHfceCuIQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FShadow_of_the_Tomb_Raider&psig=AOvVaw2QJrbXj5gN0iT7ddXU1S0E&ust=1547073793004334',
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
