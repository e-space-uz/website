import { applicationActionTypes } from './applicationActionTypes'

export const setMapData = (data) => (dispatch) => {
    try {
        dispatch({
            type: applicationActionTypes.SET_MAP_DATA,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}
export const setFormData = (data) => (dispatch) => {
    try {
        dispatch({
            type: applicationActionTypes.SET_FORM_DATA,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}
export const setFormFieldData = (data) => (dispatch) => {
    try {
        dispatch({
            type: applicationActionTypes.SET_FORM_FIELD_DATA,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}
export const resetFormData = () => (dispatch) => {
    try {
        dispatch({
            type: applicationActionTypes.RESET_FORM_DATA,
        })
    } catch (error) {
        console.log(error)
    }
}
