import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Card, Image, Grid} from 'semantic-ui-react'

let dumbProducts = [
  {
    id: 1,
    name: 'Atlas',
    imageUrl:
      'https://steamcdn-a.akamaihd.net/steam/apps/834910/header.jpg?t=1546481605',
    msrp: '59.99',
    currentPrice: '29.99',
    console: 'PC',
    description:
      'ATLAS: The ultimate survival MMO of unprecedented scale with 40,000+ simultaneous players in the same world. Join an endless adventure of piracy & sailing, exploration & combat, roleplaying & progression, settlement & civilization-building, in one of the largest game worlds ever! Explore, Build, Conquer!',
    inventory: 100,
    releaseDate: '2018-12-19T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.307Z',
    updatedAt: '2019-01-09T02:37:45.307Z',
    cartId: null
  },
  {
    id: 2,
    name: 'Grim Dawn',
    imageUrl:
      'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiru4rMmN_fAhUtTd8KHQ7gCRoQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGrim_Dawn&psig=AOvVaw3NJIfpK7XXUi4sUnV1CVdS&ust=1547071493522431',
    msrp: '29.99',
    currentPrice: '24.99',
    console: 'PC',
    description:
      'Enter an apocalyptic fantasy world where humanity is on the brink of extinction, iron is valued above gold and trust is hard earned. This ARPG features complex character development, hundreds of unique items, crafting and quests with choice & consequence.',
    inventory: 100,
    releaseDate: '2012-11-20T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.308Z',
    updatedAt: '2019-01-09T02:37:45.308Z',
    cartId: null
  },
  {
    id: 3,
    name: 'Fortnite',
    imageUrl:
      'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjR573bmd_fAhVvm-AKHcV6AtsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.com%2FFortnite-Battle-Royale-Gameplay%2Fdp%2FB07CKCQT6C&psig=AOvVaw0JyhdBlBnhEi6Tt1HJdYmT&ust=1547071792434653',
    msrp: '39.99',
    currentPrice: '20',
    console: 'xbox',
    description:
      'Fortnite Battle Royale is the completely free 100-player PvP mode in Fortnite. One giant map. A battle bus. Fortnite building skills and destructible environments combined with intense PvP combat. The last one standing wins.',
    inventory: 50,
    releaseDate: '2017-05-14T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.308Z',
    updatedAt: '2019-01-09T02:37:45.308Z',
    cartId: null
  },
  {
    id: 4,
    name: 'Fifa19',
    imageUrl:
      'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj2orbvmt_fAhWLmuAKHZlnDB4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FFIFA-19-Electronic-Arts-Xbox-One-014633371666%2F310327315&psig=AOvVaw0TB2vwYZ_v-xmIj1LD9fkS&ust=1547072110623678',
    msrp: '59.99',
    currentPrice: '24.99',
    console: 'xbox',
    description:
      'Powered by Frostbite™*, EA SPORTS™ FIFA 19 delivers a champion-caliber experience on and off the pitch. Led by the prestigious UEFA Champions League, FIFA 19 offers enhanced gameplay features that allow you to control the pitch in every moment, and provides new and unrivaled ways to play, including a dramatic finale to the story of Alex Hunter in The Journey: Champions, a new mode in the ever-popular FIFA Ultimate Team™, and more.',
    inventory: 50,
    releaseDate: '2019-04-20T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.308Z',
    updatedAt: '2019-01-09T02:37:45.308Z',
    cartId: null
  },
  {
    id: 5,
    name: 'Mario Cart 8 Deluxe',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/810W2KFm6FL._SY445_.jpg',
    msrp: '79.99',
    currentPrice: '55.99',
    console: 'switch',
    description:
      'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. ',
    inventory: 75,
    releaseDate: '2017-04-28T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.309Z',
    updatedAt: '2019-01-09T02:37:45.309Z',
    cartId: null
  },
  {
    id: 6,
    name: 'Super Smash Bros Ultimate',
    imageUrl:
      'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjbyZrJn9_fAhUtmuAKHfu6BcoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.ign.com%2Farticles%2F2019%2F01%2F04%2Fsuper-smash-bros-ultimate-dlc-roster-reportedly-leaked&psig=AOvVaw1Dn-BJX4HnGUF5MS0NpPGR&ust=1547073373189648',
    msrp: '79.99',
    currentPrice: '79.99',
    console: 'switch',
    description:
      'Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. ',
    inventory: 150,
    releaseDate: '2018-12-07T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.309Z',
    updatedAt: '2019-01-09T02:37:45.309Z',
    cartId: null
  },
  {
    id: 7,
    name: 'Call of Duty Black Ops 4',
    imageUrl:
      'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjxnMGEoN_fAhVNMt8KHWczDfwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.bestbuy.com%2Fsite%2Fcall-of-duty-black-ops-4-playstation-4%2F6216332.p%3FskuId%3D6216332&psig=AOvVaw1P4ZLBHaR1KBJ-geYotOc8&ust=1547073497408123',
    msrp: '59.99',
    currentPrice: '44.99',
    console: 'playstation',
    description:
      'The Black Ops series explodes back onto PS4 with incredible new multiplayer game modes – including intense, large-scale skirmishes in battle-royale style Blackout matches.',
    inventory: 100,
    releaseDate: '2018-10-12T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.309Z',
    updatedAt: '2019-01-09T02:37:45.309Z',
    cartId: null
  },
  {
    id: 8,
    name: 'Shadow of the Tomb Raider',
    imageUrl:
      'https://www.google.com/url?sa=i&source=imgres&cd=&ved=2ahUKEwjbpLiQod_fAhUqh-AKHfceCuIQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FShadow_of_the_Tomb_Raider&psig=AOvVaw2QJrbXj5gN0iT7ddXU1S0E&ust=1547073793004334',
    msrp: '59.99',
    currentPrice: '34.99',
    console: 'playstation',
    description:
      'Join Lara Croft in the perilous jungles of South America as she fights to save the world from a Mayan apocalypse and fulfil her destiny to become the Tomb Raider.',
    inventory: 50,
    releaseDate: '2018-09-14T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.309Z',
    updatedAt: '2019-01-09T02:37:45.309Z',
    cartId: null
  }
]

const AllGames = () => {
  return (
    <Grid padded>
      <Grid.Row columns={5}>
        {dumbProducts.map(product => {
          return (
            <Grid.Column key={product.id}>
              <Card style={{width: '200px'}}>
                <Image height="250px" width="300px" src={product.imageUrl} />
                <Card.Content>
                  <div className="product name and price">
                    <Card.Header>{product.name}</Card.Header>
                    <Card.Header>{'$' + product.currentPrice}</Card.Header>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid.Row>
    </Grid>
  )
}

export default AllGames
