import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import AdminReducer from './AdminReducer'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
    // redux form
    form: formReducer,
    
    UserReducer:UserReducer,
    
    // AdminReducer:AdminReducer
})