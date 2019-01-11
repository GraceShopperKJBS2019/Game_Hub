import axios from 'axios'
import products from './products'

//ACTION TYPES
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'

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
    action: GOT_CART,
    cart
  }
}

//THUNK CREATORS
export const cartAdder = productToAdd => {
  return dispatch => {
    const productAdded = addToCart(productToAdd)
    dispatch(productAdded)
  }
}

export const getCart = id => {
  return dispatch => {
    try {
      console.log('CURRENTLY USING DUMMY ID 1, LOOK AT app.js')
      let cart = axios.get(`api/users/${id}/cart`)
      const action = gotCart(cart.data)
      dispatch(gotCart(action))
    } catch (error) {
      console.log(error)
    }
  }
}

//REDUCER

export default function(state = defaultCart, action) {
  console.log('action:', action)
  switch (action.type) {
    case GOT_CART:
      return action.cart
    case ADD_TO_CART:
      return [...state, action.productToAdd]
    default:
      return state
  }
}
