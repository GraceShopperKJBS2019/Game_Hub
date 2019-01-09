//jsh;kjqrwherkhqw
import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class singleProduct extends Component {
  constructor() {
    super()
    this.state = {
      game: {}
    }
  }

  async componentDidMount() {
    const singleGame = await axios.get(
      `/api/products/${this.props.match.params.id}`
    )
    this.setState(() => {
      return {
        game: singleGame.data
      }
    })
  }

  render() {
    const {game} = this.state
    return (
      <div>
        <h1>{game.name}</h1>
      </div>
    )
  }
}

export default singleProduct
