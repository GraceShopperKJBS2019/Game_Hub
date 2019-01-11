import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store/user'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user, email, handleClick} = props

  let welcome = user.hasOwnProperty('firstName') ? (
    <h3>{'Welcome' + user.firstName + ' ' + user.lastName}</h3>
  ) : (
    <h3>'no user'</h3>
  )

  return (
    <div>
      {welcome}
      <button className="btn bg-red white p1 rounded" onClick={handleClick}>
        Logout
      </button>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    user: state.user,
    email: state.user.email
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const history = ownProps.history

  return {
    async handleClick() {
      const thunk = logout()
      await dispatch(thunk)
      history.push('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
