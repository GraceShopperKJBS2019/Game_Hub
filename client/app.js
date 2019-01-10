import React from 'react'
// import '../public/style.css'
import {
  Navbar,
  AllGames,
  singleProduct,
  AllPcGames,
  AllXboxGames
} from './components'
import Routes from './routes'
import {Navlink, Switch, Route, withRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <main>
        <Switch>
          <Route exact path="/products" component={AllGames} />
          <Route path="/products/xbox" component={AllXboxGames} />
          <Route path="/products/pc" component={AllPcGames} />
          {/* <Route path = '/products/playstation' component = {Playstation}/> */}
          {/* <Route path = '/products/switch' component = {Switch}/> */}
          <Route path="/products/:id" component={singleProduct} />
        </Switch>
      </main>
    </div>
  )
}

export default App
