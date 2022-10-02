import { SET_IS_LOADING, SET_PRODUCTS_BY_DISCOUNT } from "./actionTypes"

export const setProductsByDiscount = (questions) => ({
  type: SET_PRODUCTS_BY_DISCOUNT,
  payload: questions,
})

export const setIsLoaading = () => ({
  type: SET_IS_LOADING,
})

export const setProductsByDiscountAsync = () => async (dispatch) => {
  try {
    dispatch(setIsLoaading())

    const response = await fetch("http://localhost:3000/productsByDiscount")
    const json = await response.json()

    dispatch(setProductsByDiscount(json))
  } catch (err) {
    throw new Error(err.message)
  }
}
