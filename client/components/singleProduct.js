import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Image, Item, Dropdown, Button, Icon} from 'semantic-ui-react'
import {Review} from './reviews'
import {game} from '../store/singleProduct'
import {setConsole} from '../store/currConsole'
import AddToCartButton from './addToCartButton'

class singleProduct extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  onChangeDropdown(event, data) {
    this.props.setConsole(data.value)
  }

  render() {
    const {singleProduct} = this.props

    const consoles = [
      {key: 'PC', text: 'PC', value: 'PC'},
      {key: 'SW', text: 'Switch', value: 'Switch'},
      {key: 'XB', text: 'Xbox', value: 'Xbox'},
      {key: 'PS', text: 'Playstation', value: 'Playstation'}
    ]

    return (
      <div>
        <Item.Group>
          <Item>
            <Item.Image size="medium" src={singleProduct.imageUrl} rounded />

            <Item.Content>
              <Item.Header>{singleProduct.name}</Item.Header>

              <Item.Description>{singleProduct.description}</Item.Description>

              <Dropdown
                placeholder="console"
                search
                selection
                options={consoles}
                value={this.props.console}
                onChange={this.onChangeDropdown.bind(this)}
              />

              <Item.Meta>
                <span className="price">{singleProduct.price}</span>
              </Item.Meta>

              <AddToCartButton product={singleProduct} />

              {singleProduct.reviews && (
                <Review review={singleProduct.reviews} />
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.singleProduct,
    console: state.console
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProduct: id => dispatch(game(id)),
    setConsole: cons => dispatch(setConsole(cons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleProduct)
