import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Image, Item, Dropdown, Button, Icon} from 'semantic-ui-react'
import {Review} from './reviews'
import {game} from '../store/singleProduct'
import {setConsole} from '../store/currConsole'
import AddToCartButton from './addToCartButton'

const priceHelper = price => {
  let ret = `$${price}`
  return ret.slice(0, ret.length - 2) + '.' + ret.slice(ret.length - 2)
}

class singleProduct extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  onChangeDropdown(event, data) {
    this.props.setConsole(data.value)
  }

  render() {
    const {singleProduct} = this.props
    console.log(singleProduct)
    const consoles = [
      {key: 'PC', text: 'PC', value: 'PC'},
      {key: 'SW', text: 'Switch', value: 'Switch'},
      {key: 'XB', text: 'Xbox', value: 'Xbox'},
      {key: 'PS', text: 'Playstation', value: 'Playstation'}
    ]
    // const price = singleProduct.currentPrice.toString().slice(0, -2) +'.' +
    // singleProduct.currentPrice.toString().slice(-2)
    let price = `$${singleProduct.currentPrice}`
    price =
      price.slice(0, price.length - 2) + '.' + price.slice(price.length - 2)
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
                {singleProduct.currentPrice === singleProduct.msrp ? (
                  <span className="price">
                    {priceHelper(singleProduct.msrp)}
                  </span>
                ) : (
                  <div>
                    <strike className="price">
                      {priceHelper(singleProduct.msrp)}
                    </strike>
                    <span>{priceHelper(singleProduct.currentPrice)}</span>
                  </div>
                )}
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
