import axios from 'axios'

// ACTION TYPES
const SET_ORDER = 'SET_ORDER'
const GET_ORDER = 'GET_ORDER'

// ACTION CREATORS
const gotOrders = orders => {
  return {
    type: GET_ORDER,
    orders
  }
}

// const setOrder = (order) => {
//   return {
//     type: SET_ORDER,
//     order
//   }
// }

// ACTION THUNKS
export const getOrders = id => {
  return async dispatch => {
    try {
      let orders = await axios.get(`/api/orderhistory/${id}`)
      const action = gotOrders(orders.data)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    default:
      return state
  }
}
