import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu, Image, Dropdown, Icon, Search, Button} from 'semantic-ui-react'
import CartModal from './cart'
import Routes from '../routes'

const Navbar = props => (
  <Menu inverted color="black">
    <Menu.Item as={Link} to="/">
      <Image
        circular
        size="tiny"
        centered
        src="http://game-hub2019.herokuapp.com/icon.png"
      />
    </Menu.Item>
    <Menu.Item>
      <Dropdown className="inverted" text="Platforms" button>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/products">
            All platforms
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/products/pc"
            icon="computer"
            text="PC"
          />
          <Dropdown.Item
            as={Link}
            to="/products/xbox"
            icon="xbox"
            text="Xbox"
          />
          <Dropdown.Item
            as={Link}
            to="/products/playstation"
            icon="playstation"
            text="Playstation"
          />
          <Dropdown.Item
            as={Link}
            to="/products/switch"
            icon="nintendo switch"
            text="Switch"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    <Menu.Item as={Link} to="/products/newreleases">
      New Releases
    </Menu.Item>
    <Menu.Item>Sale</Menu.Item>
    <Menu.Item>
      <Routes />
    </Menu.Item>
    <Menu.Item position="right" fitted>
      <Search />
    </Menu.Item>
    <Menu.Item>
      <CartModal />
    </Menu.Item>
    {props.isLoggedIn && (
      <Menu.Item>
        <Button inverted onClick={props.handleClick}>
          Logout
        </Button>
      </Menu.Item>
    )}
    {props.isLoggedIn && (
      <Menu.Item>
        <Dropdown button icon="user">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/orders" text="Past Orders" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    )}
  </Menu>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
