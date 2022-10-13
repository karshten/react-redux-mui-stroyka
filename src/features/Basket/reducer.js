import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_PRODUCT_FROM_CART, SET_TO_CART, RESET_CART } from "./actionTypes"
import produce from "immer"

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  providers: {},
}
export const cartReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case RESET_CART: {
      state.items = {},
      state.totalCount = 0,
      state.totalPrice = 0,
      state.providers = {}
      break
    }
    case SET_TO_CART: {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key]
      })
      break
    }
    case ADD_TO_CART: {
      const isExists = state.items[action.payload.id]
      state.totalPrice += action.payload.price
      state.totalCount += 1
      state.providers[action.payload.provider] = action.payload.provider

      if (isExists) {
        state.items[action.payload.id].count += 1
        return
      }

      state.items[action.payload.id] = { ...action.payload, count: 1 }
      break
    }
    case REMOVE_FROM_CART: {
      const isExists = state.items[action.payload.id]
      state.totalPrice -= action.payload.price
      state.totalCount -= 1


      if (isExists && state.items[action.payload.id].count > 1) {
        state.items[action.payload.id].count -= 1
        return
      }

      delete state.items[action.payload.id]
      delete state.providers[action.payload.provider]
      break
    }
    case DELETE_PRODUCT_FROM_CART: {
      const product = state.items[action.payload.id]
      state.totalPrice -= product.price * product.count
      state.totalCount -= product.count

      delete state.providers[action.payload.provider]
      delete state.items[action.payload.id]

      break
    }
    default:
      return state
  }
})
