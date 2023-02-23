export const allExamData = () => {
    return async (dispatch, getstate) => {
         const token = localStorage.getItem("token")
        const data = await fetch(`https://examination.onrender.com/student/studentExam`, {
            method: "GET",
            headers: {
                "access-token": JSON.parse(token)
            }
        })
        const res = await data.json()
        dispatch({
            type: "STUDENT_ALL_EXAM_DATA",
            payload: res.data
        })
    }
}