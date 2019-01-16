import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllGames} from './allgames'

const adapter = new Adapter()
enzyme.configure({adapter})

const products = [
  {
    id: 1,
    name: 'Atlas',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/ATLAS-600x826.jpg',
    msrp: 5999,
    currentPrice: 2999,
    console: 'PC',
    description:
      'ATLAS: The ultimate survival MMO of unprecedented scale with 40,000+ simultaneous players in the same world. Join an endless adventure of piracy & sailing, exploration & combat, roleplaying & progression, settlement & civilization-building, in one of the largest game worlds ever! Explore, Build, Conquer!',
    inventory: 100,
    releaseDate: '2018-12-19T00:00:00.000Z',
    createdAt: '2019-01-15T20:57:11.770Z',
    updatedAt: '2019-01-15T20:57:11.770Z'
  },
  {
    id: 2,
    name: 'Grim Dawn',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/Grim%20Dawn-600x826.jpg',
    msrp: 2999,
    currentPrice: 2499,
    console: 'PC',
    description:
      'Enter an apocalyptic fantasy world where humanity is on the brink of extinction, iron is valued above gold and trust is hard earned. This ARPG features complex character development, hundreds of unique items, crafting and quests with choice & consequence.',
    inventory: 100,
    releaseDate: '2012-11-20T00:00:00.000Z',
    createdAt: '2019-01-15T20:57:11.771Z',
    updatedAt: '2019-01-15T20:57:11.771Z'
  },
  {
    id: 3,
    name: 'Fortnite',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-600x826.jpg',
    msrp: 3999,
    currentPrice: 2000,
    console: 'xbox',
    description:
      'Fortnite Battle Royale is the completely free 100-player PvP mode in Fortnite. One giant map. A battle bus. Fortnite building skills and destructible environments combined with intense PvP combat. The last one standing wins.',
    inventory: 50,
    releaseDate: '2017-05-14T00:00:00.000Z',
    createdAt: '2019-01-15T20:57:11.771Z',
    updatedAt: '2019-01-15T20:57:11.771Z'
  },
  {
    id: 4,
    name: 'Fifa19',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2019-600x826.jpg',
    msrp: 5999,
    currentPrice: 2499,
    console: 'xbox',
    description:
      'Powered by Frostbite™*, EA SPORTS™ FIFA 19 delivers a champion-caliber experience on and off the pitch. Led by the prestigious UEFA Champions League, FIFA 19 offers enhanced gameplay features that allow you to control the pitch in every moment, and provides new and unrivaled ways to play, including a dramatic finale to the story of Alex Hunter in The Journey: Champions, a new mode in the ever-popular FIFA Ultimate Team™, and more.',
    inventory: 50,
    releaseDate: '2019-04-20T00:00:00.000Z',
    createdAt: '2019-01-15T20:57:11.771Z',
    updatedAt: '2019-01-15T20:57:11.771Z'
  },
  {
    id: 5,
    name: 'Mario Cart 8 Deluxe',
    imageUrl:
      'https://static-cdn.jtvnw.net/ttv-boxart/Mario%20Kart%208-600x826.jpg',
    msrp: 7999,
    currentPrice: 5599,
    console: 'switch',
    description:
      'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. ',
    inventory: 75,
    releaseDate: '2017-04-28T00:00:00.000Z',
    createdAt: '2019-01-15T20:57:11.771Z',
    updatedAt: '2019-01-15T20:57:11.771Z'
  },
  {
    id: 6,
    name: 'Super Smash Bros Ultimate',
    imageUrl:
      'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Smash%20Bros.%20Ultimate-600x826.jpg',
    msrp: 7999,
    currentPrice: 7999,
    console: 'switch',
    description:
      'Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. ',
    inventory: 150,
    releaseDate: '2018-12-07T00:00:00.000Z',
    createdAt: '2019-01-15T20:57:11.772Z',
    updatedAt: '2019-01-15T20:57:11.772Z'
  },
  {
    id: 7,
    name: 'Call of Duty Black Ops 4',
    imageUrl:
      'https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty%3A%20Black%20Ops%204-600x826.jpg',
    msrp: 5999,
    currentPrice: 4499,
    console: 'playstation',
    description:
      'The Black Ops series explodes back onto PS4 with incredible new multiplayer game modes – including intense, large-scale skirmishes in battle-royale style Blackout matches.',
    inventory: 100,
    releaseDate: '2018-10-12T00:00:00.000Z',
    createdAt: '2019-01-15T20:57:11.772Z',
    updatedAt: '2019-01-15T20:57:11.772Z'
  },
  {
    id: 8,
    name: 'Shadow of the Tomb Raider',
    imageUrl:
      'https://static-cdn.jtvnw.net/ttv-boxart/Shadow%20of%20the%20Tomb%20Raider-600x826.jpg',
    msrp: 5999,
    currentPrice: 3499,
    console: 'playstation',
    description:
      'Join Lara Croft in the perilous jungles of South America as she fights to save the world from a Mayan apocalypse and fulfil her destiny to become the Tomb Raider.',
    inventory: 50,
    releaseDate: '2018-09-14T00:00:00.000Z',
    createdAt: '2019-01-15T20:57:11.772Z',
    updatedAt: '2019-01-15T20:57:11.772Z'
  }
]

describe('Tier Three - Renders Divs Containing Cards', () => {
  describe('<Div />', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<AllGames products={products} />)
    })

    it('renders eight divs containing cards and images', () => {
      expect(wrapper.find('div')).to.have.length(8)
    })
  })
})
