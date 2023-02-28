import React from "react";
import FormInput from "../../Reusable/FormInput";
import { handleSubmit } from "../../Redux/Action/SignUpaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
// import Validation from "../../users/Validation";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { eror } = useSelector((stat) => stat.SignUp);
  const submitData = (e) => {
    e.preventDefault();
    dispatch(handleSubmit(navigate));
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
              <form onSubmit={submitData}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <h4 className="text-center fw-normal mb-5">SignUp Here</h4>
                </div>
                <div className="form-outline mb-4">
                  <FormInput
                    Label="Name : "
                    element="input"
                    type="text"
                    error={eror}
                    place="Enter Your Name Here "
                    name="name"
                    nameclass="form-control"
                  />
                </div>

                <div className="form-outline mb-3">
                  <FormInput
                    Label="Email : "
                    type="email"
                    error={eror}
                    element="input"
                    place="Enter Your email Here "
                    name="email"
                    nameclass="form-control"
                  />
                </div>
                <div className="form-outline mb-3">
                  <FormInput
                    Label="Password : "
                    type="password"
                    error={eror}
                    element="input"
                    place="Enter Your Password Here "
                    name="password"
                    nameclass="form-control"
                  />
                </div>
                <div className="form-outline mb-3">
                  <FormInput
                    Label="Role : "
                    name="role"
                    nameclass="form-select"
                    error={eror}
                    element="select"
                    val={["select", "teacher", "student"]}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <NavLink
                    className="text-decoration-none text-primary"
                    to="/ForgetPassword"
                  >
                    Forgot Password
                  </NavLink>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button className="btn btn-lg btn-info" type="submit">
                    Sign Up
                  </button>
                  <p className="small fw-bold mt-4 pt-1 mb-0">
                    <NavLink
                      className="text-decoration-none text-primary"
                      to="/login"
                    >
                      already SignUp Login Here
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

export default SignUp;
