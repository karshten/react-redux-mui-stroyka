import { SET_IS_LOADING, SET_QUESTIONS } from "./actionTypes"

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: questions,
})

export const setIsLoaading = () => ({
  type: SET_IS_LOADING,
})

export const setQuestionsAsync = () => async (dispatch) => {
  try {
    dispatch(setIsLoaading())

    const response = await fetch("http://localhost:3000/questions")
    const json = await response.json()

    dispatch(setQuestions(json))
  } catch (err) {
    throw new Error(err.message)
  }
}
