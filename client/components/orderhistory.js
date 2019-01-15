import React from 'react'
import {connect} from 'react-redux'
import {Item, Segment, Header} from 'semantic-ui-react'

const orderList = props => {
  const {orderHistory} = props
  return (
    <Segment>
      <Header name="Past Transactions" />
      <Item.Group divided>
        {orderHistory.map(orders => {
          console.log('PAST ORDERS --->', orders)
          return (
            <Item key={orders.id}>
              <Item.Image size="tiny" src={orders.imageURL} />
              <Item.Content verticalAlign="middle">
                <Item.Header>{orders.productName}</Item.Header>
                <Item.Meta>
                  <span>{orders.checkoutPrice}</span>
                </Item.Meta>
              </Item.Content>
            </Item>
          )
        })}
      </Item.Group>
    </Segment>
  )
}

const mapStateToProps = state => {
  return {
    history: state.orderHistory
  }
}

export default connect(mapStateToProps)(orderList)
