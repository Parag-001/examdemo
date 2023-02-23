import { combineReducers } from 'redux'
import SignUp from '../Reducer/SignUp'
import Login from './Login'
import StudentDataShow from './StudentDataShow'
import ExamData from './ExamData'
import StudeExamData from './StudentExamData'

const rootReducer = combineReducers({
    SignUp,
    Login,
    StudentDataShow,
    ExamData,
    StudeExamData
})
export default rootReducer