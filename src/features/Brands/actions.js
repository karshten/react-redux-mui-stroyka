import { FILTER_BRAND_LIST, SET_BRAND_LIST, SET_IS_PENDING } from "./actionType";

export const setBrandList = (list) => ({
    type: SET_BRAND_LIST,
    payload: list
})

export const filterBrandList = (list) => ({
    type: FILTER_BRAND_LIST,
    payload: list
})

export const setIsPending = (payload) => ({
    type: SET_IS_PENDING,
    payload
})

export const setBrandListAsync = () => async (dispatch) => {
    try {
        dispatch(setIsPending(true))
        const response = await fetch('http://localhost:3000/list')
        const data = await response.json()

        dispatch(setBrandList(data))
        dispatch(setIsPending(false))

    } catch (err) {
        throw new Error(err.message)
    }
}

export const filterBrandListAsync = (payload) => async (dispatch) => {
    try {
        dispatch(setIsPending(true))
        const response = await fetch(`http://localhost:3000/list?letter=${payload}`)
        const data = await response.json()

        dispatch(setBrandList(data))
        dispatch(setIsPending(false))

    } catch (err) {
        throw new Error(err.message)
    }
}