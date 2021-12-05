import { dialogActionTypes } from './dialogActionTypes'

export const openDialogTypeSuccess = (data) => (dispatch) => {
    try {
        dispatch({
            type: dialogActionTypes.OPEN_DIALOG_TYPE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}

export const closeDialog = (data) => (dispatch) => {
    try {
        dispatch({
            type: dialogActionTypes.CLOSE_DIALOG,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}
