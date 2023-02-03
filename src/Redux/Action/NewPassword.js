import swal from "sweetalert"
import { ResetForm } from "./SignUpaction"

export const NewPassword = (token) => {
         return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch(`https://examination.onrender.com/users/ForgotPassword/Verify?token=${token}`, {
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
            dispatch(ResetForm())
             } else {
                     swal("Sorry",res.message, "error")
        }
    }
}