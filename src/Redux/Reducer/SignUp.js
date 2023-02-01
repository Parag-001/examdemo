const initialData = {
    val: "",
    data: []
}

const SignUp = (state = initialData, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                val: {
                    ...state.val,
                      [action.payload.name]: action.payload.value
                }
            }
        case "SUBMIT":
            document.forms[0].reset()
            return {
                ...state,
                data: [ ...state.data, state.val ],
            }
        default: return state
    }

}
export default SignUp