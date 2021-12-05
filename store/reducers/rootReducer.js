import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import applicationReducers from './applicationReducer'
import dialogReducer from './dialogReducer'

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['application'],
}

const rootReducer = combineReducers({
    application: applicationReducers,
    dialog: dialogReducer,
})

export default persistReducer(rootPersistConfig, rootReducer)
