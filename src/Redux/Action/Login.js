import { Flip, toast } from "react-toastify"
import swal from "sweetalert2"
import { resetForm } from "./SignUpaction"

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
            //  toast.error(res.message)
         } else {
            dispatch(resetForm())
             res.data.role === "teacher" ? navigate("/teacherdashboard"): navigate("/student")
             localStorage.setItem("token", JSON.stringify(res.data.token));
             localStorage.setItem("Login", JSON.stringify(true))
             localStorage.setItem("role", JSON.stringify(res.data.role))
             swal.fire("Great", res.message, "success")
            //  toast.success(res.message, {
            //      position: "top-center",
            //      Transition: "flip"
            //  })
             
         }
        dispatch({
             type: "LOGIN",
             payload: res.data
         })
    }   
}

export const logout = () => {
    localStorage.setItem("Login",JSON.stringify(false) )
    return {
        type: "LOGOUT",

    }
}