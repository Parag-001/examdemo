import swal from "sweetalert"
import { resetForm } from "./SignUpaction"
export const changeExamData = () => {
    return {
        type: "CHANGE_EXAM",
    }
}
export const handle_Exam = (ques, o1, o2, o3, o4, answer,note) => {
    return async (dispatch, getState) => {
        dispatch(nextQuestion(ques, o1, o2, o3, o4, answer,note))
        const token = localStorage.getItem("token")
        const state = getState()
        console.log('first', state.ExamData.notes.filter((c) => c !== "" && c!== undefined))
        const data = await fetch('https://examination.onrender.com/dashboard/Teachers/Exam', {
            method: "POST",
            body: JSON.stringify({
                subjectName: state.ExamData.subjectName[0],
                questions: state.ExamData.questionData,
                notes: state.ExamData.notes.filter((c) => c !== "" && c!== undefined)
            }),
            headers: {
                "access-token": JSON.parse(token),
                 "Content-type": "application/json",
            }
        })
        const res = await data.json()
        console.log('res', res)
        if (res.statusCode === 200) {
            swal("Good !", res.message, "success")
            localStorage.setItem("examdata", JSON.stringify(res.data))
            dispatch(resetForm())
        } else {
            swal("Sorry !", res.message, "error")
        }
        dispatch({
            type: "SUBMIT_EXAM_DATA",
            payload: res.data
        })
    }
}
export const handle_Edit_Exam = (ques, o1, o2, o3, o4, answer, note,navigate) => {
    return async (dispatch, getState) => {
        const id = localStorage.getItem("id")
        dispatch(nextQuestion(ques, o1, o2, o3, o4, answer,note))
        const token = localStorage.getItem("token")
        const state = getState()
        const data = await fetch(`https://examination.onrender.com/dashboard/Teachers/editExam?id=${id}`, {
            method: "PUT",
            body: JSON.stringify({
                subjectName: state.ExamData.subjectName[0],
                questions: state.ExamData.questionData,
                notes: state.ExamData.notes.filter((c) => c !== "" && c!== undefined)
            }),
            headers: {
                "access-token": JSON.parse(token),
                 "Content-type": "application/json",
            }
        })
        const res = await data.json()
        console.log('res', res)
        if (res.statusCode === 200) {
            swal("Good !", res.message, "success")
            localStorage.setItem("examdata", JSON.stringify(res.data))
            navigate('/viewexam')
            dispatch(resetForm())
        } else {
            swal("Sorry !", res.message, "error")
        }
        dispatch({
            type: "EDIT_EXAM_DATA",
            payload: res.data.questions
        })
    }
}

export const particular_Exam = (id, navigate, nav, sub,note) => {
    const token = localStorage.getItem("token")
    localStorage.setItem("id", id)
    return async(dispatch,getState) => {
        const data = await fetch(`https://examination.onrender.com/dashboard/Teachers/examDetail?id=${id}`, {
            method: "GET",
            headers: {
                "access-token": JSON.parse(token)
            }
        })
        const res = await data.json()
        if (res.statusCode === 200) {
            navigate(nav);
        }
        dispatch({
            type: "VIEW_EXAM_DATA",
            payload: res.data,
            single: res.data?.questions.map((a) => {
                return {
                        subName: sub,
                        question: a.question,
                        answer: a.answer,
                        option1: a.options[0],
                        option2: a.options[1],
                        option3: a.options[2],
                        option4: a.options[3],
                        // notes: note
                   };
                })
        })
    }
}
export const deleteData = (id) => {
    const token = localStorage.getItem("token")
    return async (dispatch, getState) => {
        const state = getState()
        const data = await fetch(`https://examination.onrender.com/dashboard/Teachers/deleteExam?id=${id}`, {
            method: "DELETE",
            headers: {
                "access-token" : JSON.parse(token)
            }
        })
        const res = await data.json()
        const a = state.ExamData.examData.filter((c) => {
            return c._id !== id
        })
        dispatch({
            type: "DELETE",
            payload: a
        })
    }
}
export const nextQuestion = (ques, o1, o2, o3, o4, answer, s, note,val,check,b) => {
    return {
        type: "NEXT",
        subjectName: s,
        notes: note,
        value: val,
        valcheck: check,
        payload: {
        question: ques,
        answer: answer,
        options: [
                o1,
                o2,
                o3,
                o4
            ]
        },
    }
}
export const previousQuestion = (val) => {
    return {
        type: "PREVIOUS",
        payload: val
    }
}
export const viewExamDetail = (val) => {
       return async (dispatch, getstate) => {
        const token = localStorage.getItem("token")
        const data = await fetch(`https://examination.onrender.com/dashboard/Teachers/viewExam`, {
            method: "GET",
            headers: {
                "access-token": JSON.parse(token)
            }
        })
        const res = await data.json()
        dispatch({
            type: "VIEW_EXAM_DETAIL",
            payload: res.data,
            // single: a
        })
    }
}

