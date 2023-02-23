const initialData = {
    examPaper: [],
    Exam_bool: false,
    studData : []
}
const Give_Exam_Paper = (state=initialData,action) => {
    switch (action.type) {
        case "CHANGES_ONCHANGE": {
            return {
                ...state,
                Exam_bool: false
            }
        }
        case "GIVE_EXAM_DATA":
            return {
                ...state,
                examPaper: action.payload,
                Exam_bool: true
            }
        case "CHANGE_EXAM_BOOL":
            let c = [...state.examPaper]
            c.splice(state.questionno, 1, action.payload);
            return {
                ...state,
                examPaper: c,
                Exam_bool: true,
            }
        case "STUD_DATA": 
            return {
                ...state,
                studData: [
                    ...state.studData, 
                    {
                    "question": action.payload.question,
                    "answer": action.payload.answer
                    }
                ]
            }
        default: return state
    }
}

export default Give_Exam_Paper