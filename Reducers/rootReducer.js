import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import AdminReducer from './AdminReducer'


export default combineReducers({
    UserReducer:UserReducer,
    // AdminReducer:AdminReducer
})