import {LOADING , SUCCESS , FAILURE} from '../actions/index';

const intialState = {
    names: [],
    error: null,
    isLoading: false
}

export const reducer = (state = initialState , action) => {
    console.log("reducer", action);
    switch (action.type) {
        default:
            return state;
    }
}