import React, {Component} from 'react'
import {
  Slider,
  Navbar,
  AllGames,
  singleProduct,
  AllPcGames,
  AllXboxGames,
  AllPlaystayGames,
  AllSwitchGames,
  Footer,
  orderList,
  NewReleases,
  AllSales
} from './components'
import {Navlink, Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {games} from './store/products'
import {getCart} from './store/cart'
import {getOrders} from './store/orderHistory'
import Landing from './components/hero'
import {Sticky} from 'semantic-ui-react'

class App extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    this.props.getCart(this.props.user.id)
    this.props.user.id && this.props.getOrders(this.props.user.id)
    return (
      <div
        style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}
      >
        <Sticky>
          <Navbar />
        </Sticky>
        <main style={{flex: 1, paddingTop: '1%'}}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/products" component={AllGames} />
            <Route path="/products/newreleases" component={NewReleases} />
            <Route path="/products/xbox" component={AllXboxGames} />
            <Route path="/products/pc" component={AllPcGames} />
            <Route path="/products/playstation" component={AllPlaystayGames} />
            <Route path="/products/switch" component={AllSwitchGames} />
            <Route path="/products/sales" component={AllSales} />
            <Route path="/products/:id" component={singleProduct} />
            <Route path="/orders" component={orderList} />
          </Switch>
        </main>
        <Footer style={{paddingTop: '55px', position: 'absolute'}} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(games()),
    getCart: id => dispatch(getCart(id)),
    getOrders: id => dispatch(getOrders(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
