import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

const TeacherDashBoard = () => {
  const { data, isLogin } = useSelector((stat) => stat.Login);
  console.log("isLogin", isLogin);
  return (
    <>
      <h2 className="text-secondary text-center mt-2">Welcome {data.name}</h2>
    </>
  );
};

export default TeacherDashBoard;
