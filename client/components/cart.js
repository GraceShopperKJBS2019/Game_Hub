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
import RemoveFromCartButton from './removeFromCartButton'

const priceHelper = price => {
  let ret = `$${price}`
  return `${ret.slice(0, ret.length - 2) + '.' + ret.slice(ret.length - 2)}`
}

const CartModal = props => {
  console.log('props.cart:', props.cart)
  const {cart} = props
  // let pricesArr = cart.map(elem => {
  //   return elem.currentPrice
  // })
  let total = 0
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
          {cart.map(cartItem => {
            const product = cartItem
            total += product.currentPrice
            if (product.inventory && product.currentPrice === product.msrp) {
              return (
                <Item key={cartItem.Id}>
                  <Item.Image size="tiny" src={product.imageUrl} />
                  <Item.Content verticalAlign="middle">
                    <Item.Header>{product.name}</Item.Header>
                    <Item.Meta>
                      <span>{priceHelper(product.currentPrice)}</span>
                      <span>
                        <RemoveFromCartButton cart={cartItem} />
                      </span>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              )
            } else {
              return (
                <Item key={cartItem.id}>
                  <Item.Image size="tiny" src={product.imageUrl} />
                  <Item.Content verticalAlign="middle">
                    <Item.Header>{product.name}</Item.Header>
                    <Item.Meta>
                      <strike> {priceHelper(product.msrp)}</strike>
                      <span> {priceHelper(product.currentPrice)}</span>
                      <span>
                        <RemoveFromCartButton cart={cartItem} />
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
            <Item.Header>Total: {priceHelper(total)}</Item.Header>
            {/* <span>
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
            </span> */}
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
    cart: state.cart || []
  }
}

export default connect(mapStateToProps)(CartModal)
