import React from "react";
import FormInput from "../../Reusable/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../Redux/Action/Login";
import { useNavigate, Link, NavLink } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(handleLogin(navigate));
  };

  return (
    <>
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
              <form onSubmit={handleSubmitLogin}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <h4 className="text-center fw-normal mb-5">Login Here</h4>
                </div>
                <div className="form-outline mb-4">
                  <FormInput
                    Label="Email : "
                    type="email"
                    element="input"
                    place="Enter Your email Here"
                    name="email"
                    nameclass="form-control"
                  />
                </div>

                <div className="form-outline mb-3">
                  <FormInput
                    Label="Password : "
                    type="password"
                    element="input"
                    place="Enter Your Password Here "
                    name="password"
                    nameclass="form-control"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <NavLink
                    className="text-decoration-none text-secondary"
                    to="/ForgetPassword"
                  >
                    Forgot Password
                  </NavLink>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button className="btn btn-info" type="submit">
                    Login
                  </button>
                  <p className="small fw-bold mt-4 pt-1 mb-0">
                    <NavLink
                      className="text-decoration-none text-secondary"
                      to="/"
                    >
                      Don't Have Account Sign in Here
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
