import swal from "sweetalert"
import { resetForm } from "./SignUpaction"

export const handlePass = () => {
     return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch('https://examination.onrender.com/users/ForgotPassword', {
            method: "POST",
            body: JSON.stringify({  
                email: state.SignUp.val.email,
            }),
            headers: {
                "Content-type": "application/json",
            }
        })
         const res = await data.json()
         console.log('res', res)
         if (res.statusCode === 200) {
             swal("Check Mail", res.message, "success")
             dispatch(resetForm())
         } else {
             swal("Sorry",res.message,"error")
         }
    }
}