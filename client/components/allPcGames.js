import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Card, Image, Grid, Button, Icon} from 'semantic-ui-react'
import AddToCartButton from './addToCartButton'

const AllPcGames = props => {
  const products = props.products.filter(product => product.console === 'PC')

  return (
    <Grid container columns={5} doubling>
      {products.map(product => {
        return (
          <Grid.Column key={product.id}>
            <Card style={{width: '200px'}}>
              <Image
                height="250px"
                width="300px"
                src={product.imageUrl}
                href={product.id.toString()}
              />
              <Card.Content>
                <div className="product name and price">
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Header>
                    {' '}
                    {'$' +
                      product.currentPrice.toString().slice(0, -2) +
                      '.' +
                      product.currentPrice.toString().slice(-2)}
                    <AddToCartButton product={product} />
                  </Card.Header>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })}
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(AllPcGames)
