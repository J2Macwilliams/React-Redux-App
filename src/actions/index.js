export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const loading = () => ({type: LOADING})
export const success = (data) => ({type: SUCCESS, payload: data})
export const failure = (data) => ({type: FAILURE, payload: data})