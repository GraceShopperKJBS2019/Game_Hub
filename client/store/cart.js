import axios from 'axios'
import products from './products'
import {runInNewContext} from 'vm'

//ACTION TYPES
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const FINISH_ORDER = 'FINISH_ORDER'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

//INITIAL STATE
const defaultCart = []

//ACTION CREATORS
// const getCart = cart => ({type: GET_CART, cart})
const addToCart = productToAdd => {
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
const deleteFromCart = cartItem => {
  return {
    type: DELETE_FROM_CART,
    cartItem
  }
}

//THUNK CREATORS

export const getCart = id => {
  return async dispatch => {
    try {
      let userCart = await axios.get(`/api/users/${id}/cart`)
      const action = gotCart(userCart.data)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}
export const cartAdder = (id, productToAdd) => {
  return async dispatch => {
    try {
      const productAdded = await axios.post(
        `/api/users/${id}/cart`,
        productToAdd
      )
      const action = addToCart({...productAdded.data, product: productToAdd})
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteFromCartThunk = cartId => {
  return async dispatch => {
    try {
      const gameToRemove = await axios.delete(`/api/users/cart/${cartId}`)
      const action = deleteFromCart(gameToRemove.data)
      dispatch(action)
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
    case DELETE_FROM_CART:
      return state.filter(item => item.id !== action.cartItem.id)
    default:
      return state
  }
}
