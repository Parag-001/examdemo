export const StudentDataShow = () => {
    const token = localStorage.getItem("token")
    return async (dispatch, getState) => {
        const data = await fetch('https://examination.onrender.com/dashboard/Teachers', {
            method: "GET",
            headers: {
                "access-token": JSON.parse(token)
            }
        })
        const res = await data.json()
        dispatch({
            type: "STUDENT_DATA",
            payload: res.data
        })
    }
}