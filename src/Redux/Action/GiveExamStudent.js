import Swal from "sweetalert2"

export const give_Exam = (id,navigate) => {
    const token = localStorage.getItem("token")
    localStorage.setItem("id",id)
    return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch(`https://examination.onrender.com/student/examPaper?id=${id}`, {
            method: "GET",
            headers: {
                "access-token" : JSON.parse(token)
            }
        })
        const res = await data.json()
        console.log('res', res)
        navigate("/exampaper")
        dispatch({
            type: "GIVE_EXAM_DATA",
            payload: res.data.map((cur) => {
                return {
                    id: cur._id,
                    question: cur.question,
                    option1: cur.options[0],
                    option2: cur.options[1],
                    option3: cur.options[2],
                    option4: cur.options[3],
                }
            })
        })
    }
}
export const  student_Data = (id,answer) => {
    return {
        type: "STUD_DATA",
        payload: {
            question: id,
            answer: answer
        }
    }
}
export const submitExam = (id1,answer) => {
    return async (dispatch, getState) => {
        dispatch(student_Data(id1,answer))
        const id = localStorage.getItem("id")
        const state = getState()
        console.log('id', id)
        console.log('state.Give_Exam_Paper.studData', state.Give_Exam_Paper.studData)
        const token = localStorage.getItem("token")
        const data = await fetch(`https://examination.onrender.com/student/giveExam?id=${id}`, {
            method: "POST",
            headers: {
                "access-token": JSON.parse(token),
            },
            body: state.Give_Exam_Paper.studData,
        })
        const res = await data.json()
        console.log('res', res)
        if (res.statusCode === 200) {
                Swal.fire("Good",res.message,"success")
        } else {
            Swal.fire("Oops",res.message,"error")
            }
        dispatch({
            type: "SUBMIT_EXAM_DATA",
            // payload: res.data.questions
        })
    }
}

export const changeGiveExamData = () => {
    return {
        type: "CHANGES_ONCHANGE",
    }
}
export const change_Exam_Bool = (val) => {
    return {
        type: "CHANGE_EXAM_BOOL",
        payload: val
    }
}
