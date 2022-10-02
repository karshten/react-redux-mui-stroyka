import { SET_IS_LOADING, SET_QUESTIONS } from "./actionTypes"

const initialState = {
  items: [],
  isLoading: false,
}

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS: {
      return { ...state, items: action.payload, isLoading: false }
    }
    case SET_IS_LOADING: {
      return { ...state, isLoading: true }
    }
    default:
      return state
  }
}
