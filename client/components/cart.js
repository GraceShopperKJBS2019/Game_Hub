import React from 'react'
import {
  Button,
  Modal,
  Header,
  Item,
  Icon,
  Divider,
  Segment,
  Form
} from 'semantic-ui-react'
import CheckoutModal from './checkout'

let dumbProducts = [
  {
    id: 1,
    name: 'Atlas',
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/ATLAS.jpg',
    msrp: 5999,
    currentPrice: 2999,
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
    imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/Grim%20Dawn.jpg',
    msrp: 2999,
    currentPrice: 2499,
    console: 'PC',
    description:
      'Enter an apocalyptic fantasy world where humanity is on the brink of extinction, iron is valued above gold and trust is hard earned. This ARPG features complex character development, hundreds of unique items, crafting and quests with choice & consequence.',
    inventory: 100,
    releaseDate: '2012-11-20T00:00:00.000Z',
    createdAt: '2019-01-09T02:37:45.308Z',
    updatedAt: '2019-01-09T02:37:45.308Z',
    cartId: null
  }
]

const CartModal = () => {
  let pricesArr = dumbProducts.map(elem => {
    return elem.currentPrice
  })
  console.log('-----', pricesArr)
  return (
    <Modal
      trigger={
        <Button>
          <Icon name="shopping cart" size="large" />
        </Button>
      }
    >
      <Header icon="shopping cart" content="Shopping Cart" />
      <Modal.Content>
        <Item.Group divided>
          {dumbProducts.map(product => {
            if (product.inventory && product.price === product.msrp) {
              return (
                <Item key={product.id}>
                  <Item.Image
                    size="tiny"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/ATLAS.jpg"
                  />
                  <Item.Content verticalAlign="middle">
                    <Item.Header>{product.name}</Item.Header>
                    <Item.Meta>
                      <span>{product.currentPrice}</span>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              )
            } else {
              return (
                <Item key={product.id}>
                  <Item.Image
                    size="tiny"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/ATLAS.jpg"
                  />
                  <Item.Content verticalAlign="middle">
                    <Item.Header>{product.name}</Item.Header>
                    <Item.Meta>
                      <strike>
                        {' '}
                        {'$' +
                          product.msrp.toString().slice(0, -2) +
                          '.' +
                          product.msrp.toString().slice(-2)}
                      </strike>
                      <span>
                        {' '}
                        {'$' +
                          product.currentPrice.toString().slice(0, -2) +
                          '.' +
                          product.currentPrice.toString().slice(-2)}
                      </span>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              )
            }
          })}
        </Item.Group>
        <Divider />
        <Item.Group>
          <Item>
            <Item.Header>Total:</Item.Header>
            <span>
              {'$' +
                pricesArr
                  .reduce((accumulator, currentValue, currentIndex, array) => {
                    return accumulator + currentValue
                  }, 0)
                  .toString()
                  .slice(0, -2) +
                '.' +
                pricesArr
                  .reduce((accumulator, currentValue, currentIndex, array) => {
                    return accumulator + currentValue
                  }, 0)
                  .toString()
                  .slice(-2)}
            </span>
          </Item>
        </Item.Group>
        <Segment color="black" inverted />
        <Form>
          <Form.Field width="four">
            <label>Email</label>
            <input placeholder="Enter Email" />
          </Form.Field>
        </Form>
        <CheckoutModal />
      </Modal.Content>
    </Modal>
  )
}

export default CartModal
