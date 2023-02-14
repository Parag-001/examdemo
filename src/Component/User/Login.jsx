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
      <div className="w-25 main-div-signup bg-light px-4 py-2 container">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmitLogin}>
          <FormInput
            Label="Email : "
            type="email"
            element="input"
            place="Enter Your email Here "
            name="email"
            nameclass="form-control"
          />
          <FormInput
            Label="Password : "
            type="password"
            element="input"
            place="Enter Your Password Here "
            name="password"
            nameclass="form-control"
          />
          <div className="form-group text-end">
            <NavLink
              className="text-decoration-none text-primary"
              to="/ForgetPassword"
            >
              Forgot Password
            </NavLink>
          </div>
          <div className="form-group text-center my-4">
            <button className="btn btn-info" type="submit">
              Login
            </button>
          </div>
          <div className="form-group text-center">
            <NavLink className="text-decoration-none text-secondary" to="/">
              Don't Have Account Sign in Here
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
