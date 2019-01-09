import React from 'react'
// import '../public/style.css'
import {Navbar, AllGames} from './components'
import Routes from './routes'
import {Navlink, Switch, Route, withRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <main>
        <Switch>
          <Route path="/products" component={AllGames} />
          {/* <Route path = '/products/xbox' component = {Xbox}/> */}
          {/* <Route path = '/products/pc' component = {Pc}/> */}
          {/* <Route path = '/products/playstation' component = {Playstation}/> */}
          {/* <Route path = '/products/switch' component = {Switch}/> */}
          {/* <Route path = '/products/:id' component = {SingleGame}/> */}
        </Switch>
      </main>
    </div>
  )
}

export default App
