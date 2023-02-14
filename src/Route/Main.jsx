import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="ul">
          <li>
            <NavLink className="navlinks" to="/studentData">
              Student Data
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks" to="/createexam">
              Create Exam
            </NavLink>
          </li>
          <li>
            <NavLink className="navlinks" to="/login">
              View Exam
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Main;
