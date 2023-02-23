export const give_Exam = (id,navigate) => {
     const token = localStorage.getItem("token")
    return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch(`https://examination.onrender.com/student/examPaper?id=${id}`, {
            method: "GET",
            headers: {
                "access-token" : JSON.parse(token)
            }
        })
        const res = await data.json()
        navigate("/exampaper")
        dispatch({
            type: "GIVE_EXAM_DATA",
            payload: res.data
        })
    }
}