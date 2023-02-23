const initialData = {
    AllExam: [],
    loading: true
}

const StudeExamData = (state = initialData, action) => {
    switch (action.type) {
        case "STUDENT_ALL_EXAM_DATA":
            return {
                ...state,
                AllExam: action.payload,
                loading: false
            }
        default: return state
    }
}
export default StudeExamData