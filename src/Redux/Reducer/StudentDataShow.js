const initialData = {
    datalist: [],
    viewData: [],
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
        case "VIEW_DATA":
            return {
                ...state,
                viewData: action.payload
            }
        default: return state
    }
}
export default StudentDataShow