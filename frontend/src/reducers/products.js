import {FETCHED_ALL_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT} from '../actions/products'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_PRODUCTS:
      return action.payload
    case ADD_PRODUCT:
      return [...state, action.payload]
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload)
    default:
      return state
  }
}