import React from "react";
import {
  ChangeData,
  errorHandle,
  Previous,
} from "../Redux/Action/SignUpaction";
import { useDispatch, useSelector } from "react-redux";
import Validation from "../users/Validation";
import { ChangeExamData } from "../Redux/Action/CreateExam";

const FormInput = (prop) => {
  const {
    name,
    type,
    place,
    Label,
    error,
    nameclass,
    disabled,
    inputdisabled,
    require,
    valname,
    click,
  } = prop;

  const dispatch = useDispatch();
  const { val, eror } = useSelector((stat) => stat.SignUp);
  const { pre_val, prev_bool, questionno, questionData } = useSelector(
    (stat) => stat.ExamData
  );

  const handleChange = (e) => {
    dispatch(errorHandle(name, Validation(e.target.name, e.target.value, val)));
    dispatch(ChangeExamData());
    // dispatch(Previous(e.target.name, pre_val[questionno - 1]?.[name]));
    dispatch(ChangeData(e.target.value, name));
  };
  const element =
    prop.element === "input" ? (
      <div className="form-group mb-3">
        <label htmlFor="">{Label}</label>
        <input
          type={type}
          // required={require}
          name={name}
          error={error}
          value={
            (prev_bool ? pre_val[questionno - 1]?.[name] : "") || val?.[name]
          }
          onChange={handleChange}
          disabled={disabled}
          autoComplete="off"
          placeholder={place}
          className={nameclass}
        />
        <p className="text-danger">{eror[name]}</p>
      </div>
    ) : prop.element === "radio" ? (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          disabled={disabled}
          name="flexRadioDefault"
        />
        <input
          type={type}
          // required
          name={name}
          error={error}
          value={
            (prev_bool ? pre_val[questionno - 1]?.[name] : "") || val?.[name]
          }
          onChange={handleChange}
          autoComplete="off"
          disabled={inputdisabled}
          placeholder={place}
          className={nameclass}
        />
        <p className="text-danger">{eror[name]}</p>
      </div>
    ) : prop.element === "button" ? (
      <input
        type={type}
        onClick={click}
        className={nameclass}
        value={valname}
      />
    ) : (
      <div className="form-group mb-3">
        <label htmlFor="">{Label}</label>
        <select
          name={name}
          value={val?.[name]}
          className={nameclass}
          onChange={handleChange}
          disabled={disabled}
        >
          {prop.val.map((cur) => {
            return (
              <option key={cur} value={cur}>
                {cur}
              </option>
            );
          })}
        </select>
      </div>
    );
  return <>{element}</>;
};

export default FormInput;
