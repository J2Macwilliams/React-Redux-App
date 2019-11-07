import { LOADING, SUCCESS, FAILURE } from '../actions/index';

const intialState = {
    names: [],
    error: null,
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                names: action.payload,
                isLoading: false
            }
        case FAILURE:
            return {
                ...state,
                names: [],
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}