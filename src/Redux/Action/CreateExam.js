import swal from "sweetalert"

export const ChangeExamData = (val, name) => {
    return {
        type: "CHANGE_EXAM",
        payload: {
            value: val,
            name: name,
        }
    }
}
export const Handle_Exam = (ques, o1, o2, o3, o4, answer) => {
    return async (dispatch, getState) => {
        dispatch(NextQuestion(ques, o1, o2, o3, o4, answer))
        const token = localStorage.getItem("token")
        const state = getState()
        const data = await fetch('https://examination.onrender.com/dashboard/Teachers/Exam', {
            method: "POST",
            body: JSON.stringify({
                subjectName: state.ExamData.subjectName[0],
                questions: state.ExamData.questionData,
                 notes: [
                  "10mins exam",
                  "start time 10am"
                ]
            }),
            headers: {
                "access-token": JSON.parse(token),
                 "Content-type": "application/json",
            }
        })
        const res = await data.json()
        if (res.statusCode === 200) {
            swal("Good !",res.message,"success")
        } else {
            swal("Sorry !",res.message,"error")
        }
        dispatch({
            type: "SUBMIT_EXAM_DATA",
            payload: res.data
        })
    }
}
// export const ResetExam = () => {
//     return {
//         type: "RESET_EXAM",
//     }
// }

export const Particular_Exam = (id,navigate) => {
    const token = localStorage.getItem("token")
    return async(dispatch,getState) => {
        const data = await fetch(`https://examination.onrender.com/dashboard/Teachers/examDetail?id=${id}`, {
            method: "GET",
            headers: {
                "access-token": JSON.parse(token)
            }
        })
        const res = await data.json()
        navigate('/viewexamdata')
        dispatch({
            type: "VIEW_EXAM_DATA",
            payload: res.data
        })
    }
}
export const NextQuestion = (ques, o1, o2, o3, o4, answer,s ) => {
    return {
        type: "NEXT",
        subjectName: s,
        
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
export const PreviousQuestion = () => {
    return {
        type: "PREVIOUS",
    }
}