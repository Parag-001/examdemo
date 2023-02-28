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
              <form onSubmit={handleSubmitPassword}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <h4 className="text-center fw-normal mb-5">
                    Forget Password
                  </h4>
                </div>
                <div className="form-outline mb-4">
                  <FormInput
                    Label="Email : "
                    type="email"
                    element="input"
                    place="Enter Your email Here "
                    name="email"
                    nameclass="form-control"
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button className="btn btn-info" type="submit">
                    Send Mail
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

export default ForgetPassword;
