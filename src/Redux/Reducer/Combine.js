import { combineReducers } from 'redux'
import SignUp from '../Reducer/SignUp'
import Login from './Login'
import StudentDataShow from './StudentDataShow'

const rootReducer = combineReducers({
    SignUp,
    Login,
    StudentDataShow
})
export default rootReducer