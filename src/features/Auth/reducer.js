import { SIGN_UP } from "./actionTypes"
import produce from "immer"

const initialState = {
  user: null
}
export const cartReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      state.user = action.payload
      break
    }
    case LOGIN: {
      state.user = action.payload
      break
    }
    default:
      return state
  }
})
