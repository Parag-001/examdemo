import React from "react";
import { GiTeacher } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Logout } from "../../Redux/Action/SignUpaction";

const StudentSlide = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = () => {
    dispatch(Logout());
    navigate("/login");
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="slide">
        <div className="row">
          <div
            className="col-md-2"
            style={{ height: "100vh", background: "lightgrey" }}
          >
            <ul>
              <li>
                <GiTeacher className="mx-3" />
                Student
              </li>
              <li>
                <NavLink className="navlinks" to="/studentData">
                  AllExam
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/createexam">
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
                <button className="btn btn-secondary" onClick={handlelogout}>
                  Logout
                </button>
              </div>
            </nav>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSlide;
