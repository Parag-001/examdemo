import Swal from "sweetalert2"
import axios from "axios";

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
export const submitExam = (id1,answer,navigate) => {
    return async (dispatch, getState) => {
        dispatch(student_Data(id1,answer))
        const id = localStorage.getItem("id")
        const state = getState()
        const token = localStorage.getItem("token")
         await axios.post(`https://examination.onrender.com/student/giveExam?id=${id}`,state.Give_Exam_Paper.studData,{
                 headers: {
                     "access-token": JSON.parse(token),
                 }
         }).then((res) => {
             console.log('res', res)
            navigate('/viewallexam')
            Swal.fire("Good","Exam Finish","success")
        }).catch((err) => {
              Swal.fire("Oops",err.message,"error")
        })
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
