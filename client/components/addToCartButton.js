import React from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'semantic-ui-react'
import {cartAdder} from '../store/cart'

const AddToCartButton = props => {
  return (
    <Button animated onClick={() => props.add(props.user.id, props.product)}>
      <Button.Content hidden>Cart It</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </Button>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (id, product) => {
      dispatch(cartAdder(id, product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)
