import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { resetPassword } from "../../Redux/Action/NewPassword";
import FormInput from "../../Reusable/FormInput";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(navigate));
  };
  return (
    <>
      <section className="h-100">
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
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <h4 className="text-center fw-normal mb-5">Reset Password</h4>
                </div>
                <div className="form-outline mb-4">
                  <FormInput
                    Label="Old Password : "
                    element="input"
                    type="password"
                    place="Enter Your Old Password Here "
                    name="oldpassword"
                    nameclass="form-control"
                  />
                </div>
                <div className="form-outline mb-4">
                  <FormInput
                    Label="Password : "
                    element="input"
                    type="password"
                    place="Enter Your New PassWord Here "
                    name="password"
                    nameclass="form-control"
                  />
                </div>
                <div className="form-outline mb-4">
                  <FormInput
                    Label=" Confirm Password : "
                    type="password"
                    element="input"
                    place="Enter Confirm Passwod  "
                    name="confirmpass"
                    nameclass="form-control"
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button className="btn btn-info" type="submit">
                    Change
                  </button>
                  {/* <button className="btn btn-info mx-3" type="submit">
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/login"
                    >
                      Back Login
                    </NavLink>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
