import React from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'semantic-ui-react'
import {deleteFromCartThunk} from '../store/cart'

const RemoveFromCartButton = props => {
  return (
    <Button
      onClick={() => props.delete(props.cart.id, props.idx)}
      floated="right"
      animated
      icon="remove"
      color="red"
      circular
    />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (item, idx) => dispatch(deleteFromCartThunk(item, idx))
  }
}

export default connect(null, mapDispatchToProps)(RemoveFromCartButton)
