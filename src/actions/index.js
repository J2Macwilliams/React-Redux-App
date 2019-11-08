import axios from "axios"

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const loading = () => ({ type: LOADING })
export const success = (data) => ({ type: SUCCESS, payload: data })
export const failure = (data) => ({ type: FAILURE, payload: data })

export const getBeers = () => async (dispatch) => {
    try {
        dispatch(loading());
        //Brewdog/s beer recipes. 3600 requests per hour limit
        axios.get('https://api.punkapi.com/v2/beers')
            .then(response => {
                console.log("Thirsty?", response.data)
                const info = response.data
                dispatch(
                    success(info)
                )
            })

    } catch (error) {
        dispatch(failure(error))
    }
};

