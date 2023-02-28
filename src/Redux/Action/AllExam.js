import axios from "axios"
export const allExamData = () => {
    return async (dispatch, getstate) => {
         const token = localStorage.getItem("token")
       await axios.get(`https://examination.onrender.com/student/studentExam`, {
            headers: {
                "access-token": JSON.parse(token)
            }
       }).then((res) => {
            dispatch({
            type: "STUDENT_ALL_EXAM_DATA",
            payload: res.data?.data
        })
       }).catch((err) => {
           console.log('err', err)
     })
    }
}
export const stud_Profile = () => {
        return async (dispatch, getstate) => {
         const token = localStorage.getItem("token")
       await axios.get(`https://examination.onrender.com/student/getStudentDetail`, {
            headers: {
                "access-token": JSON.parse(token)
            }
       }).then((res) => {
             dispatch({
            type: "STUDENT_PROFILE",
            payload: res.data?.data
        })
       }).catch((err) => {
            console.log('err', err)
        })
       
    }
}
export const edit_Profile = (navigate) => {
     return async (dispatch, getState) => {
         const token = localStorage.getItem("token")
         const state = getState()
         await axios.put(`https://examination.onrender.com/student/studentProfile`, {
             name: state.SignUp.val.name,
         },
             {
            headers: {
                "access-token": JSON.parse(token)
            },
             }).then((res) => {
            console.log('res', res)
            navigate('/studprofile')
             }).catch((err) => {
            console.log('err', err)
        })
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