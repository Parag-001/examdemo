import React from "react";
import FormInput from "../../Reusable/FormInput";
import { NewPassword } from "../../Redux/Action/NewPassword";
import { useDispatch } from "react-redux";
import { useLocation, NavLink } from "react-router-dom";
const NewPass = () => {
  const dispatch = useDispatch();
  const location = new URLSearchParams(useLocation().search);
  const token = location.get("token");

  const handleNewPass = (e) => {
    e.preventDefault();
    dispatch(NewPassword(token));
  };
  return (
    <>
      {/* <div className="w-25 main-div-signup bg-light px-4 py-2 container">
        <h4 className="text-center mb-4">New Password</h4>
        <form action="" onSubmit={handleNewPass}>
          <FormInput
            Label="Password : "
            element="input"
            type="password"
            place="Enter Your Name Here "
            name="password"
            nameclass="form-control"
          />
          <FormInput
            Label=" Confirm Password : "
            type="password"
            element="input"
            place="Enter Your email Here "
            name="confirmpass"
            nameclass="form-control"
          />
          <div className="form-group text-center my-4">
            <button className="btn btn-info" type="submit">
              Change
            </button>
            <button className="btn btn-info mx-3" type="submit">
              <NavLink className="text-decoration-none text-dark" to="/login">
                Back Login
              </NavLink>
            </button>
          </div>
        </form>
      </div> */}
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div
            className="row d-flex justify-content-center align-items-center h-100"
            style={{ marginTop: "10%" }}
          >
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="shjkdf"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleNewPass}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <h4 className="text-center fw-normal mb-5">
                    Set New Password
                  </h4>
                </div>
                <div className="form-outline mb-4">
                  <FormInput
                    Label="Password : "
                    element="input"
                    type="password"
                    place="Enter Your Name Here "
                    name="password"
                    nameclass="form-control"
                  />
                </div>
                <div className="form-outline mb-4">
                  <FormInput
                    Label=" Confirm Password : "
                    type="password"
                    element="input"
                    place="Enter Your email Here "
                    name="confirmpass"
                    nameclass="form-control"
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button className="btn btn-info" type="submit">
                    Change
                  </button>
                  <button className="btn btn-info mx-3" type="submit">
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/login"
                    >
                      Back Login
                    </NavLink>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewPass;
