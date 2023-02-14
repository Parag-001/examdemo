const AllData = {
    question: "",
    answer: "",
    option1 : "",
    option2 : "",
    option3 : "",
    option4 : ""
}
const initialData = {
    subjectName: "",
    questions: {...AllData},
    questionno: 1,
    questionData: [],
    notes: []
}
const ExamData = (state = initialData, action) => {
    switch (action.type) {
        case "CHANGE_EXAM":
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [action.payload.name] : action.payload.value
                }
            }
        // case "SUBMIT_QUESTION":
        //     return {
        //         ...state,
        //         questionData: [...state.questionData, action.payload],
        //         questionno: state.questionno + 1
        //     }
        case "RESET_EXAM": 
            return {
                ...state,
                questions: {...AllData}
            }
        case "NEXT": 
            return { 
                ...state, 
                subjectName: [...state.subjectName,action.subjectName],
                questionData: [...state.questionData, action.payload],
                questionno: state.questionno === 15 ? state.questionno : state.questionno + 1
            } 
        case "PREVIOUS": 
            return { 
                ...state, 
                questionno: state.questionno - 1
            } 
        default: return state 
    } 
 
} 
export default ExamData 