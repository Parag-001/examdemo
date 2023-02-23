import React from "react";
import { GiTeacher } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Action/Login";

const StudentSlide = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = () => {
    dispatch(logout());
    navigate("/login");
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="slide">
        <div className="row">
          <div
            className="col-md-2"
            style={{ height: "100vh", background: "rgb(168, 224, 211)" }}
          >
            <ul>
              <li>
                <GiTeacher className="mx-3" />
                Student
              </li>
              <li>
                <NavLink className="navlinks" to="/viewallexam">
                  AllExam
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/exampaper">
                  Exam Paper
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/login">
                  Give Exam
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-10">
            <nav className="navbar">
              <div style={{ marginLeft: "90%" }}>
                <button className="btn btn-success" onClick={handlelogout}>
                  Logout
                </button>
              </div>
            </nav>
            <div className="comp">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSlide;
