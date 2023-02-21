const initialData = {
    data: []
}
const Login = (state= initialData, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                data: action.payload,
            }
          case "LOGOUT": 
            return {
                ...state,
                isLogin: false
            }
        default: return state
    }
}
export default Login