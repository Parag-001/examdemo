import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { GrView } from "react-icons/gr";
import { IoIosPeople, IoIosCreate } from "react-icons/io";
import { Logout } from "../../Redux/Action/Login";
import { useDispatch } from "react-redux";

const SlideBar = ({ children }) => {
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
              <li className="mt-4">
                <GiTeacher className="mx-3" />
                Teacher
              </li>
              <li>
                <NavLink className="navlinks" to="/studentData">
                  <IoIosPeople className="mx-2" />
                  Student Data
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/createexam">
                  <IoIosCreate className="mx-2" />
                  Create Exam
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/viewexam">
                  <GrView className="mx-2" />
                  View Exam
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

export default SlideBar;
