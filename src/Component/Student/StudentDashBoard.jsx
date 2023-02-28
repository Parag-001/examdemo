import React from "react";
import { useSelector } from "react-redux";

const StudentDashBoard = () => {
  const { data } = useSelector((stat) => stat.Login);
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

export default StudentDashBoard;
