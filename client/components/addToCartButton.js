import React from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'semantic-ui-react'
import {cartAdder} from '../store/cart'

const AddToCartButton = props => {
  return (
    <Button animated onClick={() => props.addToCart(props.product)}>
      <Button.Content hidden>Cart It</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      console.log('product:', product)
      dispatch(cartAdder(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddToCartButton)
