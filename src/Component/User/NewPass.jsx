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
      <div className="w-25 main-div-signup bg-light px-4 py-2 container">
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
      </div>
    </>
  );
};

export default NewPass;
