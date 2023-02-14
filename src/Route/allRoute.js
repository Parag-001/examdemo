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

const AllRoute = () => {
        let data = useRoutes([
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
                element: < ><TeacherDashBoard /></>,
            },
            {
                path: "/student",
                element: <Protected ><StudentDashBoards /></Protected>,
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
                element: <StudentData />,
            },
            {
                path: "/viewdata",
                element: <ViewData />,
            },
            {
                path: "/createexam",
                element: <CreateExam />,
            },
            {
                path: "*",
                element: <h1 className='text-center'> Page Not Found </h1>,
            },

        ])
        return data
}

export default AllRoute