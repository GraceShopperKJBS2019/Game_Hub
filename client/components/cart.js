import React from 'react'
import {connect} from 'react-redux'
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

const CartModal = props => {
  let {cart} = props
  let pricesArr = cart.map(elem => {
    return elem.currentPrice
  })

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
          {cart.map(product => {
            if (product.inventory && product.price === product.msrp) {
              return (
                <Item key={product.id}>
                  <Item.Image size="tiny" src={product.imageUrl} />
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
                  <Item.Image size="tiny" src={product.imageUrl} />
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

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartModal)
