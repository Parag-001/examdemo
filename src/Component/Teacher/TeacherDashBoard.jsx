import React from "react";
import { useSelector } from "react-redux";
const TeacherDashBoard = () => {
  const { data } = useSelector((stat) => stat.Login);
  return (
    <>
      <h1 className="text-center">Welcome {data.name}</h1>
    </>
  );
};

export default TeacherDashBoard;
