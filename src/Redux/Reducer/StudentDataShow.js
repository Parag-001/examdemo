const initialData = {
    datalist: [],
    loading: true
}
const StudentDataShow = (state= initialData,action) => {
    switch (action.type) {
        case "STUDENT_DATA":
            return {
                ...state,
                datalist: action.payload,
                loading: false
            }
        default: return state
    }
}
export default StudentDataShow