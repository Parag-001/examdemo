import React from "react";
import {
  changeData,
  clickVali,
  errorHandle,
} from "../Redux/Action/SignUpaction";
import { useDispatch, useSelector } from "react-redux";
import Validation from "../Validation/Validation";
import { changeExamData } from "../Redux/Action/CreateExam";
import ClickValidation from "../Validation/ClickVali";

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
    valname,
    click,
    require,
  } = prop;
  const dispatch = useDispatch();
  const { val, eror, questionError } = useSelector((stat) => stat.SignUp);
  const { pre_val, prev_bool, questionno, subjectName } = useSelector(
    (stat) => stat.ExamData
  );

  const handleChange = (e) => {
    dispatch(errorHandle(name, Validation(e.target.name, e.target.value, val)));
    dispatch(changeExamData());
    // dispatch(clickVali(ClickValidation(val), questionno));
    dispatch(changeData(e.target.value, e.target.name));
  };

  const element =
    prop.element === "input" ? (
      <div className="form-group mb-3">
        <label htmlFor="">{Label}</label>
        <input
          type={type}
          name={name}
          required={require}
          error={error}
          value={(prev_bool ? pre_val[questionno]?.[name] : "") || val?.[name]}
          onChange={handleChange}
          disabled={disabled}
          autoComplete="off"
          placeholder={place}
          className={nameclass}
        />
        <p className="text-danger">{eror[name]}</p>
        {/* <p className="text-danger">{questionError[name]}</p> */}
      </div>
    ) : prop.element === "radio" ? (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="answer"
          checked={false}
          value={(prev_bool ? pre_val[questionno]?.[name] : "") || val?.[name]}
          onChange={handleChange}
        />
        <input
          type={type}
          required
          name={name}
          error={error}
          value={(prev_bool ? pre_val[questionno]?.[name] : "") || val?.[name]}
          onChange={handleChange}
          autoComplete="off"
          disabled={inputdisabled}
          placeholder={place}
          className={nameclass}
        />
        <p className="text-danger">{eror[name]}</p>
        {/* <p className="text-danger">{questionError[name]}</p> */}
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
          value={subjectName[0] === "" ? val?.[name] : subjectName[0]}
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
