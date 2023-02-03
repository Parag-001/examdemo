import swal from "sweetalert"
import { ResetForm } from "./SignUpaction"

export const handleLogin = (navigate) => {
     return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch('https://examination.onrender.com/users/Login', {
            method: "POST",
            body: JSON.stringify({  
                email: state.SignUp.val.email,
                password: state.SignUp.val.password,
            }),
            headers: {
                "Content-type": "application/json",
            }
        })
         const res = await data.json()
         if (res.statusCode === 500) {
             swal("Sorry",res.message,"error")
         } else {
            dispatch(ResetForm())
             res.data.role === "teacher" ? navigate("/teacherdashboard"): navigate("/student")
            localStorage.setItem("token", JSON.stringify(res.data.token));
             swal("Great", res.message, "success")
         }
        dispatch({
             type: "LOGIN",
             payload: res.data
         })
    }
   
}