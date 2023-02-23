const initialData = {
    AllExam: [],
    loading: true,
    profileData: [],
    profile_bool: false
}

const StudeExamData = (state = initialData, action) => {
    switch (action.type) {
        case "STUDENT_ALL_EXAM_DATA":
            return {
                ...state,
                AllExam: action.payload,
                loading: false,
            }
        case "STUDENT_PROFILE":
            return {
                ...state,
                profileData: action.payload,
                profile_bool: true
            }
        case "CHANGE_PROFILE":
            return {
                ...state,
                profile_bool: false
            }
        default: return state
    }
}
export default StudeExamData