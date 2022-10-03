import { FILTER_BRAND_LIST, SET_BRAND_LIST, SET_IS_PENDING } from "./actionType"

const initiaState = {
    list: [],
    isPending: false
}

export const brandsReducer = (state = initiaState, action) => {
    switch (action.type) {
        case SET_BRAND_LIST: {
            return { ...state, list: action.payload }
        }
        case SET_IS_PENDING: {
            return {...state, isPending: action.payload}
        }

        default: return state
    }
}