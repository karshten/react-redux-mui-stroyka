import { SET_IS_LOADING, SET_ORDERS } from "./actionTypes"

export const setOrders = (orders) => ({
  type: SET_ORDERS,
  payload: orders,
})

export const setIsLoading = () => ({
  type: SET_IS_LOADING
})

export const getOrdersAsync = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))

    const response = await fetch('http://localhost:3000/orders')
    const data = await response.json()

    dispatch(setOrders(data))

  } catch (err) {
    throw new Error(err.message)
  }
}

export const addOrderAsync = (body) => async (dispatch) => {
  console.log(body);
  try {
    dispatch(setIsLoading(true))

    await fetch('http://localhost:3000/orders', {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "content-type": "application/json" }
    })

  } catch (err) {
    throw new Error(err.message)
  }
}