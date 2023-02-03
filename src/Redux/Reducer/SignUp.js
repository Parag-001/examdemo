const user = {
    name: "",
    email: "",
    password: "",
    role: "",
    confirmpass: ""
}

const initialData = {
    val: {...user},
    data: [],
    userslist: [],
    eror: {},
}

const SignUp = (state = initialData, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                val: {
                    ...state.val,
                      [action.payload.name]: action.payload.value
                },
            }
        case "SUBMIT":
            return {
                ...state,
                data: [...state.data, state.val],
                userslist: [...state.userslist, action.payload],
                // val: initialData,
                isLogin: true
            }
        case "ERROR":
            return {
                ...state,
                eror: action.payload
            }
        case "RESET":
            return {
                ...state,
                val: {...user}
            }
        default: return state
    }

}
export default SignUp