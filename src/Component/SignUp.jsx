import React from "react";
import FormInput from "../Reusable/FormInput";
import { Container, Form } from "react-bootstrap";
import { handleSubmit } from "../Redux/Action/Action";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Container className="w-25 main-div-signup bg-light px-4 py-2">
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormInput
            Label="Name : "
            element="input"
            type="text"
            place="Enter Your Name Here "
            name="name"
          />
          <FormInput
            Label="Email : "
            type="email"
            element="input"
            place="Enter Your email Here "
            name="email"
          />
          <FormInput
            Label="Password : "
            type="password"
            element="input"
            place="Enter Your Password Here "
            name="password"
          />
          <FormInput
            Label="Role : "
            name="role"
            element="select"
            val={["select", "teacher", "student"]}
          />
          <Form.Group className="text-center">
            <button
              className="btn btn-info"
              onClick={() => dispatch(handleSubmit())}
            >
              Sign Up
            </button>
          </Form.Group>
        </form>
      </Container>
    </>
  );
};

export default SignUp;
