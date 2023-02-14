const user = {
    name: "",
    email: "",
    password: "",
    role: "",
    subName: "",
    confirmpass: "",
    question: "",
    answer: "",
    option1 : "",
    option2 : "",
    option3 : "",
    option4 : ""
}

const initialData = {
    val: {...user},
    data: [],
    qno: 1,
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
                val: {  name: "",  email: "", password: "",role: "",  confirmpass: "",   question: "",  answer: "",   option1 : "", option2 : "", option3 : "", option4 : ""},
            }
        default: return state
    }

}
export default SignUp