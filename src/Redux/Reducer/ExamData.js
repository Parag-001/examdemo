
const initialData = {
    subjectName: "",
    questionno: 1,
    questionData: [],
    notes: [],
    examData: [],
    createExamData: [],
    singleExamData: [],
    loading: true,
    pre_val: [],
    prev_bool: false,
}
const ExamData = (state = initialData, action) => {
    switch (action.type) {
        case "CHANGE_EXAM":
            return {
                ...state,
                prev_bool: false
            }
        case "SUBMIT_EXAM_DATA":
            console.log('action.payload', action.payload)
            return {
                ...state,
                examData: [...state.examData, action.payload],
                questionno: 1,
                createExamData: [...state.questionData],
                questionData: []
            }
        case "VIEW_EXAM_DATA":
            return {
                ...state,
                singleExamData: [...state.singleExamData, action.payload],
                loading: false
            }
        case "DELETE": 
            return {
                ...state,
                examData: action.payload
            }
        case "NEXT": 
            return { 
                ...state, 
                subjectName: [...state.subjectName,action.subjectName],
                questionData: [...state.questionData, action.payload],
                questionno: state.questionno === 15 ? state.questionno : state.questionno + 1,
                notes: [...state.notes, action.notes],
                pre_val: [...state.pre_val, action.value],
                prev_bool: false
            } 
        case "PREVIOUS": 
            return { 
                ...state, 
                questionno: state.questionno - 1,
                prev_bool: true,
            } 
        default: return state 
    } 
 
} 
export default ExamData 