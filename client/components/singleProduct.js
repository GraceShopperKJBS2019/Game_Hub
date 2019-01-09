import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Image, Item, Dropdown} from 'semantic-ui-react'

class singleProduct extends Component {
  constructor() {
    super()
    this.state = {
      game: {},
      selected: ''
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

  onChangeDropdown(event, data) {
    this.setState({selected: data.value})
  }

  render() {
    const {game} = this.state
    let price = `$ ${game.currentPrice}`
    price =
      price.slice(0, price.length - 2) + '.' + price.slice(price.length - 2)

    const consoles = [
      {key: 'PC', text: 'PC', value: 'PC'},
      {key: 'SW', text: 'Switch', value: 'Switch'},
      {key: 'XB', text: 'Xbox', value: 'Xbox'},
      {key: 'PS', text: 'Playstation', value: 'Playstation'}
    ]

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
            <Dropdown
              placeholder="console"
              search
              selection
              options={consoles}
              value={this.state.selected}
              onChange={this.onChangeDropdown.bind(this)}
            />
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
