import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { GrView } from "react-icons/gr";
import { IoIosPeople, IoIosCreate } from "react-icons/io";
import { logout } from "../../Redux/Action/Login";
import { useDispatch } from "react-redux";

const SlideBar = ({ children }) => {
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
              <li className="mt-4">
                <GiTeacher className="mx-3 fs-3" />
                Teacher
              </li>
              <li>
                <NavLink className="navlinks" to="/studentData">
                  <IoIosPeople className="mx-2 fs-3" />
                  Student Data
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/createexam">
                  <IoIosCreate className="mx-2 fs-3" />
                  Create Exam
                </NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/viewexam">
                  <GrView className="mx-2 fs-4" />
                  View Exam
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-10 comp">
            <nav className="navbar">
              <div style={{ marginLeft: "90%" }}>
                <button className="btn btn-success" onClick={handlelogout}>
                  Logout
                </button>
              </div>
            </nav>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideBar;
