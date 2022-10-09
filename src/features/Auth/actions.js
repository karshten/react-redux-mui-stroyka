import { LOGIN, SIGN_UP } from "./actionTypes"

export const signUp = (user) => ({
  type: SIGN_UP,
  payload: user,
})

export const login = (user) => ({
  type: LOGIN,
  payload: user,
})

export const signUpAsync = (user) => async (dispatch) => {
  try {
    await fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    dispatch(signUp(user))
    user.password = ''
    localStorage.setItem(user.email, JSON.stringify(user))
  } catch (err) {
    throw new Error(err.message)
  }
}

export const loginAsync = (user) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    dispatch(login(user))

    const loggedUser = await res.json()

    localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser))
  } catch (err) {
    throw new Error(err.message)
  }
}