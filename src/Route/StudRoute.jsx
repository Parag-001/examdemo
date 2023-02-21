import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../Component/User/Login";
import SignUp from "../Component/User/SignUp";
import Protected from "./Protext";
import ViewData from "../Component/Teacher/ViewData";
import TeacherDashBoard from "../Component/Teacher/TeacherDashBoard";
import StudentDashBoards from "../Component/Student/StudentDashBoard";
import ForgetPassword from "../Component/User/ForgetPassword";
import NewPass from "../Component/User/NewPass";
import StudentData from "../Component/Teacher/StudentData";
import CreateExam from "../Component/Teacher/CreateExam";
import SlideBar from "../Component/Util/SlideBar";
import StudentSlide from "../Component/Util/StudentSlide";
import ViewExam from "../Component/Teacher/ViewExam";
import ViewExamData from "../Component/Teacher/ViewExamData";

const StudRoute = () => {
  let data = useRoutes([
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
      path: "*",
      element: (
        <StudentSlide>
          <h1 className="text-center"> Page Not Found </h1>{" "}
        </StudentSlide>
      ),
    },
  ]);
  return data;
};

export default StudRoute;
