import { FILTER_BRAND_LIST, SET_BRAND_LIST } from "./actionType";

export const setBrandList = (list) => ({
    type: SET_BRAND_LIST,
    payload: list
})

export const filterBrandList = (list) => ({
    type: FILTER_BRAND_LIST,
    payload: list
})

export const setBrandListAsync = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3000/list')
        const data = await response.json()

        dispatch(setBrandList(data))

    } catch (err) {
        throw new Error(err.message)
    }
}

export const filterBrandListAsync = (payload) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:3000/list?letter=${payload}`)
        const data = await response.json()

        dispatch(setBrandList(data))

    } catch (err) {
        throw new Error(err.message)
    }
}