import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Card, Image, Grid, Button, Icon} from 'semantic-ui-react'

const AllGames = props => {
  return (
    <Grid padded>
      <Grid.Row columns={5}>
        {props.products.map(product => {
          return (
            <Grid.Column key={product.id}>
              <Card style={{width: '200px'}}>
                <Image
                  height="250px"
                  width="300px"
                  src={product.imageUrl}
                  href={'./products/' + product.id}
                />
                <Card.Content>
                  <div className="product name and price">
                    <Card.Header>{product.name}</Card.Header>
                    <Card.Header>
                      {'$' +
                        product.currentPrice.toString().slice(0, -2) +
                        '.' +
                        product.currentPrice.toString().slice(-2)}
                      <Button animated>
                        <Button.Content hidden>Cart It</Button.Content>
                        <Button.Content visible>
                          <Icon name="shop" />
                        </Button.Content>
                      </Button>
                    </Card.Header>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(AllGames)
