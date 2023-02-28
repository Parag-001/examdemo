import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Component/User/Login'
import SignUp from '../Component/User/SignUp'
import Protected from './Protext'
import ViewData from '../Component/Teacher/ViewData'
import TeacherDashBoard from '../Component/Teacher/TeacherDashBoard'
import StudentDashBoards from '../Component/Student/StudentDashBoard'
import ForgetPassword from '../Component/User/ForgetPassword'
import NewPass from '../Component/User/NewPass'
import StudentData from '../Component/Teacher/StudentData'
import CreateExam from '../Component/Teacher/CreateExam'
import SlideBar from '../Component/Util/SlideBar'
import StudentSlide from '../Component/Util/StudentSlide'
import ViewExam from '../Component/Teacher/ViewExam'
import ViewExamData from '../Component/Teacher/ViewExamData'
import { useSelector } from 'react-redux'
import EditExam from '../Component/Teacher/EditExam'
import ViewAllExam from '../Component/Student/ViewAllExam'
import ExamPaper from '../Component/Student/ExamPaper'
import StudProfile from '../Component/Student/StudProfile'
import ResetPassword from '../Component/User/ResetPassword'

const AllRoute = () => {
    const data = localStorage.getItem("role")
        let data1 = useRoutes([
            {
                path: "/",
                element: <SignUp/>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/teacherdashboard",
                element: <SlideBar ><TeacherDashBoard /></SlideBar>,
            },
            {
                path: "/ForgetPassword",
                element: <><ForgetPassword /></>,
            },
            {
                path: "/newPassword",
                element: <NewPass />,
            },
            {
                path: "/studentData",
                element: <Protected> <SlideBar ><StudentData /></SlideBar></Protected>,
            },
            {
                path: "/viewdata",
                element:  <Protected> <SlideBar ><ViewData /></SlideBar></Protected>,
            },
            {
                path: "/createexam",
                element: <Protected> <SlideBar ><CreateExam /></SlideBar></Protected> ,
            },
            {
                path: "/viewexam",
                element: <Protected> <SlideBar ><ViewExam /></SlideBar></Protected> ,
            },
            {
                path: "/viewexamdata",
                element: <Protected> <SlideBar ><ViewExamData /></SlideBar></Protected> ,
            },
            {
                path: "/editexam",
                element: <Protected> <SlideBar ><EditExam /></SlideBar></Protected> ,
            },
            {
                path: "*",
                element: <SlideBar> <h1 className='text-center'> Page Not Found </h1></SlideBar>,
            },

        ])
     let data2 = useRoutes([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/student",
      element: (
        <Protected>
          <StudentSlide>
            <StudentDashBoards />
          </StudentSlide>
        </Protected>
      ),
    },
    {
      path: "/viewallexam",
      element: (
        <Protected>
          <StudentSlide>
            <ViewAllExam />
          </StudentSlide>
        </Protected>
      ),
    },
    {
      path: "/exampaper",
      element: (
        <Protected>
          <StudentSlide>
            <ExamPaper />
          </StudentSlide>
        </Protected>
      ),
    },
    {
      path: "/studprofile",
      element: (
        <Protected>
          <StudentSlide>
            <StudProfile />
          </StudentSlide>
        </Protected>
      ),
    },
    {
      path: "/ForgetPassword",
      element: (
        <>
          <ForgetPassword />
        </>
      ),
    },
    {
      path: "/newPassword",
      element: <NewPass />,
    },
    {
      path: "/resetpassword",
      element: <ResetPassword />,
    },

    {
      path: "*",
      element: (
        <StudentSlide>
          <h1 className="text-center"> Page Not Found </h1>
        </StudentSlide>
      ),
    },
  ]);
  
    if (JSON.parse(data) === "teacher") {
      return data1
    } else {
    return data2
  }
}

export default AllRoute