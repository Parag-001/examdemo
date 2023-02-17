import swal from 'sweetalert'
export const ChangeData = (val, name) => {
    return {
        type: "CHANGE",
        payload: {
            value: val,
            name: name,
        }
    }
}

export const handleSubmit = (nav) => {
    
    return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch('https://examination.onrender.com/users/SignUp', {
            method: "POST",
            body: JSON.stringify({
                name: state.SignUp.val.name,
                email: state.SignUp.val.email,
                password: state.SignUp.val.password,
                role: state.SignUp.val.role
            }),
            headers: {
                "Content-type": "application/json",
            }
        })
        const res = await data.json()
        if (res.statusCode === 200) {
            swal("Ohh yes", res.message,"success")
            nav("/login")
            dispatch(ResetForm())
        } else {
            swal("Error", res.message, "error")
        }
        dispatch({
            type: "SUBMIT",
            payload: res.data
        })
    }
}
export const errorHandle = (val) => {
    return {
        type: "ERROR",
        payload: val
    }
}
export const ClickVali = (val) => {
    return {
        type: "CLICK",
        payload: val
    }
}
export const ResetForm = () => {
    return {
        type: "RESET",
    }
}
export const Logout = () => {
    return {
        type: "LOGOUT",
    }
}