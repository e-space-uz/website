import {
    dialogActionTypes,
    dialogTypes,
} from '../actions/dialog/dialogActionTypes'

const initialCartState = {
    content: '',
    open: false,
    type: null,
}

const dialogReducer = (state = initialCartState, action) => {
    const { payload } = action
    switch (action.type) {
        case dialogActionTypes.OPEN_DIALOG_TYPE_SUCCESS:
            return {
                content: payload,
                type: dialogTypes.SUCCESS,
                open: true,
            }
        case dialogActionTypes.CLOSE_DIALOG:
            return {
                content: '',
                type: null,
                open: false,
            }
        default:
            return state
    }
}

export default dialogReducer
