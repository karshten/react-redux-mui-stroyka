import { ADD_TO_CART, DELETE_PRODUCT_FROM_CART, REMOVE_FROM_CART, RESET_CART, SET_TO_CART } from "./actionTypes"

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
})

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
})

export const deleteProductFromCart = (product) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: product,
})

export const setToCart = (products) => ({
  type: SET_TO_CART,
  payload: products
})

export const resetCart = () => ({
  type: RESET_CART
})

export const checkProductsInLocalStorage = () => (dispatch) => {
  const products = localStorage.getItem("products")

  if(products) {
    dispatch(setToCart(JSON.parse(products)))
  }
}

export const setLocalStorageProducts = (products) => {
  localStorage.setItem('products', JSON.stringify(products))
}