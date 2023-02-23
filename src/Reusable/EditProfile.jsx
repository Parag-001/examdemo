import React, { useEffect } from "react";
import { changeData, errorHandle } from "../Redux/Action/SignUpaction";
import { useDispatch, useSelector } from "react-redux";
import Validation from "../Validation/Validation";

import { changeProfile } from "../Redux/Action/AllExam";

const EditProfile = (prop) => {
  const { name, type, place, Label, error, nameclass } = prop;
  const dispatch = useDispatch();
  const { val, eror, questionError } = useSelector((stat) => stat.SignUp);

  const { profile_bool, profileData } = useSelector(
    (stat) => stat.StudeExamData
  );
  const handleChange = (e) => {
    dispatch(errorHandle(name, Validation(e.target.name, e.target.value, val)));
    dispatch(changeProfile());
    dispatch(changeData(e.target.value, e.target.name));
  };
  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor="">{Label}</label>
        <input
          type={type}
          name={name}
          error={error}
          value={(profile_bool ? profileData?.[name] : "") || val?.[name]}
          onChange={handleChange}
          autoComplete="off"
          placeholder={place}
          className={nameclass}
        />
        <p className="text-danger">{eror[name]}</p>
        <p className="text-danger">{questionError[name]}</p>
      </div>
    </>
  );
};

export default EditProfile;
