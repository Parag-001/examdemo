import React from "react";
import FormInput from "../../Reusable/FormInput";
import { Container, Form } from "react-bootstrap";
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
    // Object.entries(val).map(([key, value]) =>
    //   dispatch(errorHandle({ [key]: Validation(key, value) }))
    // );
    dispatch(handleSubmit(navigate));
  };
  return (
    <>
      <Container className="w-25 main-div-signup bg-light px-4 py-2">
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={submitData}>
          <FormInput
            Label="Name : "
            element="input"
            type="text"
            error={eror}
            place="Enter Your Name Here "
            name="name"
          />
          <FormInput
            Label="Email : "
            type="email"
            error={eror}
            element="input"
            place="Enter Your email Here "
            name="email"
          />
          <FormInput
            Label="Password : "
            type="password"
            error={eror}
            element="input"
            place="Enter Your Password Here "
            name="password"
          />
          <FormInput
            Label="Role : "
            name="role"
            error={eror}
            element="select"
            val={["select", "teacher", "student"]}
          />
          <Form.Group className="text-center mb-3">
            <button className="btn btn-info" type="submit">
              Sign Up
            </button>
          </Form.Group>
          <div className="form-group text-center ">
            <NavLink
              className="text-decoration-none text-secondary"
              to="/login"
            >
              already SignUp Login Here
            </NavLink>
          </div>
        </form>
      </Container>
    </>
  );
};

export default SignUp;
