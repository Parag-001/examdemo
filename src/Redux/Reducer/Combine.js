import { combineReducers } from 'redux'
import SignUp from '../Reducer/SignUp'
import Login from './Login'
import StudentDataShow from './StudentDataShow'
import ExamData from './ExamData'
import StudeExamData from './StudentExamData'
import Give_Exam_Paper from './GiveExam'

const rootReducer = combineReducers({
    SignUp,
    Login,
    StudentDataShow,
    ExamData,
    StudeExamData,
    Give_Exam_Paper
})
export default rootReducer