import { combineReducers } from 'redux'
import SignUp from '../Reducer/SignUp'
import Login from './Login'
import StudentDataShow from './StudentDataShow'
import ExamData from './ExamData'

const rootReducer = combineReducers({
    SignUp,
    Login,
    StudentDataShow,
    ExamData
})
export default rootReducer