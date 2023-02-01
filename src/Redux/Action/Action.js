export const ChangeData = (val, name) => {
    return {
        type: "CHANGE",
        payload: {
            value: val,
            name: name
        }
    }
}

export const handleSubmit = () => {
    return async (dispatch, getState) => {
        const state = getState()
        console.log('state :>> ', state);
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
        dispatch({
           type: "SUBMIT"
        })
        const res = await data.json()
        console.log('res :>> ', res);
    }
}
