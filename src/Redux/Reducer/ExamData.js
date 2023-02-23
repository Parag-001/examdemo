
const initialData = {
    subjectName: [],
    questionno: 0,
    questionData: [],
    notes: [],
    examData: [],
    createExamData: [],
    singleExamData: [],
    loading: true,
    pre_val: [],
    prev_bool: false,
    allExamData: [],
    Edit_bool: false,
    singleData: []
}
const ExamData = (state = initialData, action) => {
    switch (action.type) {
        case "CHANGE_EXAM":
            return {
                ...state,
                prev_bool: false,
                Edit_bool: false
            }
        case "SUBMIT_EXAM_DATA":
            return {
                ...state,
                examData: [...state.examData, action.payload],
                questionno: 0,
                createExamData: [...state.questionData],
                questionData: []
            }
        case "VIEW_EXAM_DATA":
            return {
                ...state,
                singleExamData: [...state.singleExamData, action.payload],
                singleData: action.single,
                loading: false,
                Edit_bool: true
            }
        // case "DELETE": 
        //     return {
        //         ...state,
        //         // examData: action.payload, 
        //     }
        case "NEXT": 
            let b = [...state.pre_val]
            state.questionno !== -1 && b.splice(state.questionno, 1, action.value);
            let c = [...state.singleData]
            c.splice(state.questionno, 1, action.value);
        return { 
            ...state, 
                 subjectName: [...state.subjectName,action.subjectName],
                 questionData:  [...state.questionData, action.payload] ,
                 questionno: state.questionno === 15 ? state.questionno : state.questionno + 1,
                 notes: [...state.notes, action.notes],
                 pre_val: state.questionno === 0 && state.pre_val.length === 0 ? [...state.pre_val, action.value] : b,
                 singleData: c,
                 prev_bool: true
            } 
        case "PREVIOUS": 
            return { 
                ...state, 
                questionno: state.questionno - 1,
                prev_bool: true,
            } 
        case "VIEW_EXAM_DETAIL":
            return {
                ...state,
                allExamData: action.payload,
                loading: false
            }
        default: return state 
    } 
 
} 
export default ExamData 