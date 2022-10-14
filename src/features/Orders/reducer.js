import { SET_IS_LOADING, SET_ORDERS } from "./actionTypes"
import produce from "immer"

const initialState = {
  items: [],
  isLoading: false
}
export const ordersReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS: {
      return { ...state, items: action.payload, isLoading: false }
    }

    case SET_IS_LOADING: {
      return { ...state, isLoading: true }
    }

    default:
      return state
  }
})
