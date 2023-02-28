
import swal from "sweetalert2"
import { resetForm } from "./SignUpaction"

export const handleLogin = (navigate) => {
     return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch(`${process.env.REACT_APP_DATA}/users/Login`, {
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
         if (res.statusCode === 200) {
             dispatch(resetForm())
              res.data.role === "teacher" ? navigate("/teacherdashboard"): navigate("/student")
              localStorage.setItem("token", JSON.stringify(res.data.token));
              localStorage.setItem("Login", JSON.stringify(true))
              localStorage.setItem("role", JSON.stringify(res.data.role))
              swal.fire("Great", res.message, "success")
         } else {
              swal.fire("Sorry",res.message,"error")
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