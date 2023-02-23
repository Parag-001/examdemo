import swal from 'sweetalert'
export const changeData = (val, name,prev_bool) => {
    return {
        type: "CHANGE",
        payload: {
            value: val,
            name: name,
        },
        prev_bool: prev_bool

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
            dispatch(resetForm())
        } else {
            swal("Error", res.message, "error")
        }
        dispatch({
            type: "SUBMIT",
            payload: res.data
        })
    }
}
export const errorHandle = (name, val) => {
    return {
        type: "ERROR",
        payload: {
            name: name,
            val: val
        }
    }
}
export const clickVali = (val) => {
    return {
        type: "CLICK",
        payload: val
    }
}
export const resetForm = () => {
    return {
        type: "RESET",
    }
}
export const prevValue = (val) => {
    return {
        type: "PREV",
        payload: val
    }
}
export const nextValue = (val) => {
    return {
        type: "NEXT_QUESTION_DATA",
        payload: val
    }
}

