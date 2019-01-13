import React from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'semantic-ui-react'
import {cartAdder} from '../store/cart'

const RemoveFromCartButton = props => {
  return <Button floated="right" animated icon="remove" color="red" circular />
}
export default RemoveFromCartButton
