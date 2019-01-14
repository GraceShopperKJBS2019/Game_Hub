import React, {Component} from 'react'
import {
  Slider,
  Navbar,
  AllGames,
  singleProduct,
  AllPcGames,
  AllXboxGames,
  AllPlaystayGames,
  AllSwitchGames
} from './components'
import Routes from './routes'
import {Navlink, Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {games} from './store/products'
import {getCart} from './store/cart'

class App extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    this.props.user.id && this.props.getCart(this.props.user.id)
    return (
      <div>
        <Navbar />
        <Routes />
        <main>
          <Switch>
            <Route exact path="/" component={Slider} />
            <Route exact path="/products" component={AllGames} />
            <Route path="/products/xbox" component={AllXboxGames} />
            <Route path="/products/pc" component={AllPcGames} />
            <Route path="/products/playstation" component={AllPlaystayGames} />
            <Route path="/products/switch" component={AllSwitchGames} />
            <Route path="/products/:id" component={singleProduct} />
          </Switch>
        </main>
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
    getCart: id => dispatch(getCart(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
