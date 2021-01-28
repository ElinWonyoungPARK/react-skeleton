import { combineReducers } from 'redux'
import { userReducer} from './uss/modules/index'

export const rootReducer = combineReducers({
    userReducer
})
export default rootReducer