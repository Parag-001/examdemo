import React from "react";
import { useSelector } from "react-redux";

const TeacherDashBoard = () => {
  const { data, isLogin } = useSelector((stat) => stat.Login);
  console.log("isLogin", isLogin);
  return (
    <>
      <img
        className="img-fluid"
        style={{ height: "88vh", width: "95vw" }}
        src="./dash.avif"
        alt=""
      />
    </>
  );
};

export default TeacherDashBoard;
