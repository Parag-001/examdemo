import React from "react";
import FormInput from "../../Reusable/FormInput";
import { useDispatch } from "react-redux";
import { handlePass } from "../../Redux/Action/ForgetPass";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const handleSubmitPassword = (e) => {
    e.preventDefault();
    dispatch(handlePass());
  };
  return (
    <>
      <div className="w-25 main-div-signup bg-light px-4 py-2 container">
        <h3 className="text-center mb-4">Forget Password</h3>
        <form action="" onSubmit={handleSubmitPassword}>
          <FormInput
            Label="Email : "
            type="email"
            element="input"
            place="Enter Your email Here "
            name="email"
          />
          <div className="form-group text-center my-4">
            <button className="btn btn-info" type="submit">
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
