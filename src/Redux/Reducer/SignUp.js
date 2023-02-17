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
    eror: {},
    er: {}
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
        case "LOGOUT": 
            return {
                ...state,
                isLogin: false
            }
        case "CLICK": 
            return {
                ...state,
                eror: {
                    "name": action.payload[0],"email" : action.payload[1],"password" : action.payload[2],"role" : action.payload[3],"subName" : action.payload[4],"confirmpass" : action.payload[5],"question" : action.payload[6],"answer" : action.payload[7],"option1" : action.payload[8],"option2" : action.payload[9],"option3" : action.payload[10],"option4" : action.payload[11]
                }
            }
        default: return state
    }

}
export default SignUp