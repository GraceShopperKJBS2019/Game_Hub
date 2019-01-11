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
  UserHome
} from './components'
import Routes from './routes'
import {Navlink, Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {games} from './store/products'

class App extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <main>
          <Switch>
            <Route exact path="/" component={Slider} />
            <Route path="/home" component={UserHome} />
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

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(games())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
