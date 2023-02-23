
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
    questionError: {
    question: "",
    option1 : "",
    option2 : "",
    option3 : "",
    option4: "",
    }
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
                val: action.payload === undefined ? {  name: "",  email: "", password: "",role: "",  confirmpass: "",   question: "",  answer: "",   option1 : "", option2 : "", option3 : "", option4 : "",note: ""} : action.payload
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
        case "FIRST_EDIT_VALUE":
            return {
                ...state,
                val: action.payload
            }
        case "RESET":
            return {
                ...state,
                val: {...user}
            }
        case "CLICK":
            return {
                ...state,
                questionError: action.ind === 0 ? {
                    question: action.payload[6],
                    answer: action.payload[7],
                    option1: action.payload[8],
                    option2: action.payload[9],
                    option3: action.payload[10],
                    option4: action.payload[11],
                }
                :{
                    question: action.payload[5],
                    answer: action.payload[6],
                    option1: action.payload[7],
                    option2: action.payload[8],
                    option3: action.payload[9],
                    option4: action.payload[10],
                }
            }
        default: return state
    }

}
export default SignUp