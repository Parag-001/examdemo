const initialData = {
    examPaper: []
}
const Give_Exam_Paper = (state=initialData,action) => {
    switch (action.type) {
        case "GIVE_EXAM_DATA":
            return {
                ...state,
                examPaper: action.payload
            }
        default: return state
    }
}

export default Give_Exam_Paper