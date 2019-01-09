import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Image, Item} from 'semantic-ui-react'

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
    let price = `$ ${game.currentPrice}`
    price =
      price.slice(0, price.length - 2) + '.' + price.slice(price.length - 2)

    return (
      <Item.Group>
        <Item>
          <Item.Image
            size="medium"
            src="https://static-cdn.jtvnw.net/ttv-boxart/Atlas-285x380.jpg"
            rounded
          />

          <Item.Content>
            <Item.Header>{game.name}</Item.Header>
            <Item.Description>{game.description}</Item.Description>
            <Item.Meta>
              <span className="price">{price}</span>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default singleProduct
