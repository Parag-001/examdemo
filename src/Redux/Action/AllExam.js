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
export const stud_Profile = () => {
        return async (dispatch, getstate) => {
         const token = localStorage.getItem("token")
        const data = await fetch(`https://examination.onrender.com/student/getStudentDetail`, {
            method: "GET",
            headers: {
                "access-token": JSON.parse(token)
            }
        })
            const res = await data.json()
            console.log('res', res)
        dispatch({
            type: "STUDENT_PROFILE",
            payload: res.data
        })
    }
}
export const edit_Profile = (navigate) => {
     return async (dispatch, getState) => {
         const token = localStorage.getItem("token")
         const state = getState()
         console.log('state.SignUp.val.name', state.SignUp.val.name)
        const data = await fetch(`https://examination.onrender.com/student/studentProfile`, {
            method: "PUT",
            body: JSON.stringify({
                name: state.SignUp.val.name,
            }),
            headers: {
                "access-token": JSON.parse(token)
            },
        })
         const res = await data.json()
         navigate('/studprofile')
            console.log('res', res)
        dispatch({
            // type: "STUDENT_PROFILE",
            // payload: res.data
        })
    }
}
export const changeProfile = () => {
    return {
        type: "CHANGE_PROFILE"
    }
}