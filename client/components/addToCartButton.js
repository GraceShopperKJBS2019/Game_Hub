import React from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'semantic-ui-react'
import {cartAdder} from '../store/cart'
import {toast, ToastContainer} from 'react-toastify'

const AddToCartButton = props => {
  return (
    <div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Button animated onClick={() => props.add(props.user.id, props.product)}>
        <Button.Content hidden>Cart It</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
    </div>
  )
}

const notif = productName =>
  toast.info(productName + ' Added To Cart!', {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  })

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (id, product) => {
      dispatch(cartAdder(id, product))
      notif(product.name)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)
