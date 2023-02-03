
const initialData = {
    data: [],
    isLogin: false
}
const Login = (state= initialData, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                data: action.payload,
                isLogin: true
            }
        default: return state
    }
}
export default Login