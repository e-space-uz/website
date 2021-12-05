import { applicationActionTypes } from '../actions/application/applicationActionTypes'

const initialCartState = {
    form: {},
    map: [],
}

const applicationReducer = (state = initialCartState, action) => {
    const { payload } = action
    switch (action.type) {
        case applicationActionTypes.SET_MAP_DATA:
            return {
                ...state,
                map: payload,
            }
        case applicationActionTypes.SET_FORM_DATA:
            return {
                ...state,
                form: payload,
            }
        case applicationActionTypes.SET_FORM_FIELD_DATA:
            return {
                ...state,
                form: { ...state.form, ...payload },
            }
        case applicationActionTypes.RESET_FORM_DATA:
            return {
                form: {},
                map: [],
            }
        default:
            return state
    }
}

export default applicationReducer
