import axios from "axios"
import swal from "sweetalert"
import { resetForm } from "./SignUpaction"
export const allExamData = () => {
    return async (dispatch, getstate) => {
         const token = localStorage.getItem("token")
       await axios.get(`${process.env.REACT_APP_DATA}/student/studentExam`, {
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
       await axios.get(`${process.env.REACT_APP_DATA}/student/getStudentDetail`, {
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
         await axios.put(`${process.env.REACT_APP_DATA}/student/studentProfile`, {
             name: state.SignUp.val.name,
         },
             {
            headers: {
                "access-token": JSON.parse(token)
            },
             }).then((res) => {
            if (res.data.statusCode === 200) {
                 swal("Super", res.data.message, "success")
                 navigate('/studprofile')
                dispatch(resetForm())
                   dispatch(stud_Profile());
             } else {
                   swal("Sorry",res.data.message, "error")
                }     
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