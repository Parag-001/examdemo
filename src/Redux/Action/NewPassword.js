import axios from "axios"
import swal from "sweetalert"
import { resetForm } from "./SignUpaction"

export const newPassword = (token) => {
         return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch(`${process.env.REACT_APP_DATA}/users/ForgotPassword/Verify?token=${token}`, {
            method: "POST",
            body: JSON.stringify({
                Password: state.SignUp.val.password,
                ConfirmPassword: state.SignUp.val.confirmpass
            }),
            headers: {
                "Content-type": "application/json",
            }
        })
             const res = await data.json()
             if (res.statusCode === 200) {
                 swal("Super",res.message, "success")
            dispatch(resetForm())
             } else {
                     swal("Sorry",res.message, "error")
        }
    }
}

export const resetPassword = (navigate) => {
     return async (dispatch, getState) => {
         const state = getState()
         const token = localStorage.getItem("token")
         await axios.post(`${process.env.REACT_APP_DATA}/users/ResetPassword`, {
                oldPassword: state.SignUp.val.oldpassword,
                Password: state.SignUp.val.password,
                ConfirmPassword: state.SignUp.val.confirmpass
            },{
            headers: {
               "access-token": JSON.parse(token),
            }
         }).then((res) => {
             if (res.data.statusCode === 200) {
                 swal("Super", res.data.message, "success")
                 navigate('/studprofile')
                 dispatch(resetForm())
              
             } else {
                   swal("Sorry",res.data.message, "error")
                }
         })
    }
}