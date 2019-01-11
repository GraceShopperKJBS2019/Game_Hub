import axios from 'axios'
import products from './products'

//ACTION TYPES
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

//INITIAL STATE
const defaultCart = []

//ACTION CREATORS
// const getCart = cart => ({type: GET_CART, cart})
export const addToCart = productToAdd => {
  console.log('action creator')
  return {type: ADD_TO_CART, productToAdd}
}

//THUNK CREATORS
export const cartAdder = productToAdd => {
  return dispatch => {
    const productAdded = addToCart(productToAdd)
    dispatch(productAdded)
  }
}

//REDUCER

export default function(state = defaultCart, action) {
  console.log('action:', action)
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.productToAdd]
    default:
      return state
  }
}
