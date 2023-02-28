export const studentDataShow = () => {
    const token = localStorage.getItem("token")
    return async (dispatch, getState) => {
        const data = await fetch(`${process.env.REACT_APP_DATA}/dashboard/Teachers`, {
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

export const particular_Data = (id,navigate) => {
    const token = localStorage.getItem("token")
    return async(dispatch,getState) => {
        const data = await fetch(`${process.env.REACT_APP_DATA}/dashboard/Teachers/viewStudentDetail?id=${id}`, {
            method: "GET",
            headers: {
                "access-token": JSON.parse(token)
            }
        })
        const res = await data.json()
        navigate('/viewdata')
        dispatch({
            type: "VIEW_DATA",
            payload: res.data
        })
    }
}