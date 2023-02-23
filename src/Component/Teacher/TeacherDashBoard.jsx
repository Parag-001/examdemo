import React from "react";
import { useSelector } from "react-redux";

const TeacherDashBoard = () => {
  const { data, isLogin } = useSelector((stat) => stat.Login);
  console.log("isLogin", isLogin);
  return (
    <>
      <h1 className="text-center">Welcome {data.name}</h1>
    </>
  );
};

export default TeacherDashBoard;
