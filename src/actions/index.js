import Axios from "axios"

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const loading = () => ({ type: LOADING })
export const success = (data) => ({ type: SUCCESS, payload: data })
export const failure = (data) => ({ type: FAILURE, payload: data })

export const getArray = () => async (dispatch) => {
    try {
        dispatch(loading());
        //Brewdog/s beer recipes. 3600 requests per hour limit
        axios.get('https://api.punkapi.com/v2/')
            .then(response => {
                console.log(response)
                // const info = response.json()
                dispatch(
                    success(info)
                )
            })

    } catch (error) {
        dispatch(failure(error))
    }
};