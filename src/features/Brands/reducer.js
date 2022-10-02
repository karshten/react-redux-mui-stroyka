import { FILTER_BRAND_LIST, SET_BRAND_LIST } from "./actionType"

const initiaState = {
    list: []
}

export const brandsReducer = (state = initiaState, action) => {
    switch (action.type) {
        case SET_BRAND_LIST: {
            return { ...state, list: action.payload }
        }

        default: return state
    }
}