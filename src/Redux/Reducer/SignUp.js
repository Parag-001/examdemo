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
    option4: "",
    note: "",
}

const initialData = {
    val: {...user},
    data: [],
    qno: 1,
    userslist: [],
    eror: {...user},
    er: {},
    // questionError: {
    // question: "",
    // option1 : "",
    // option2 : "",
    // option3 : "",
    // option4: "",
    // }
}

const SignUp = (state = initialData, action) => {

    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                val: {
                    ...state.val,
                    [action.payload.name]: action.payload.value,
                },
            }
        case "PREV":
            return {
                ...state,
                val: action.payload
            }
        case "NEXT_QUESTION_DATA":
            return {
                ...state,
                val: action.payload === undefined ? {...user} : action.payload
            }
        case "SUBMIT":
            return {
                ...state,
                data: [...state.data, state.val],
                userslist: [...state.userslist, action.payload],
            }
        case "ERROR":
            return {
                ...state,
                eror: {
                    ...state.eror,
                    [action.payload.name] : action.payload.val
                }
            }
        case "RESET":
            return {
                ...state,
                val: {  name: "",  email: "", password: "",role: "",  confirmpass: "",   question: "",  answer: "",   option1 : "", option2 : "", option3 : "", option4 : "",note: ""},
            }
        case "CLICK":
            return {
                ...state,
            }
        default: return state
    }

}
export default SignUp