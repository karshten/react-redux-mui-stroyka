import { SET_IS_LOADING, SET_PRODUCTS_BY_DISCOUNT } from "./actionTypes"

const initialState = {
  items: [],
  isLoading: false,
}

export const productsByDiscountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_BY_DISCOUNT: {
      return { ...state, items: action.payload, isLoading: false }
    }
    case SET_IS_LOADING: {
      return { ...state, isLoading: true }
    }
    default:
      return state
  }
}
