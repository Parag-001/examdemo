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
        const data = await fetch(`${process.env.REACT_APP_DATA}/users/SignUp`, {
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
export const clickVali = (val,q) => {
    return {
        type: "CLICK",
        payload: val,
        ind: q
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
export const first_Value = (val) => {
    return {
        type: "FIRST_EDIT_VALUE",
        payload: val
    }
}
export const first_Value_Exam = (val) => {
    return {
        type: "FIRST_EXAM_VALUE",
        payload: val
    }
}

