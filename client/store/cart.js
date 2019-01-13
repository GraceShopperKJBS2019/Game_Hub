import axios from 'axios'
import products from './products'

//ACTION TYPES
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const FINISH_ORDER = 'FINISH_ORDER'

//INITIAL STATE
const defaultCart = []

//ACTION CREATORS
// const getCart = cart => ({type: GET_CART, cart})
export const addToCart = productToAdd => {
  console.log('action creator')
  return {type: ADD_TO_CART, productToAdd}
}

const gotCart = cart => {
  return {
    type: GOT_CART,
    userCart: cart
  }
}

const finishedOrder = () => {
  return {
    type: FINISH_ORDER
  }
}
// THUNK CREATORS
export const cartAdder = productToAdd => {
  return dispatch => {
    const productAdded = addToCart(productToAdd)
    dispatch(productAdded)
  }
}

export const getCart = id => {
  return async dispatch => {
    try {
      console.log('CURRENTLY USING DUMMY ID 1, LOOK AT app.js')
      let userCart = await axios.get(`/api/users/${id}/cart`)
      const action = gotCart(userCart.data)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export const finishOrder = orderId => {
  return async dispatch => {
    try {
      //axios post to order histories here
      // await axois.put(`/api/ordertransactions/${orderId}`)
      dispatch(finishedOrder())
    } catch (error) {
      console.log(error)
    }
  }
}
//REDUCER

export default function(state = defaultCart, action) {
  switch (action.type) {
    case GOT_CART:
      return action.userCart
    case ADD_TO_CART:
      return [...state, action.productToAdd]
    case FINISH_ORDER:
      return []
    default:
      return state
  }
}
