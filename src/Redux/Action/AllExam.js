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
        console.log('res.data', res.data)
        dispatch({
            type: "STUDENT_ALL_EXAM_DATA",
            payload: res.data
        })
    }
}