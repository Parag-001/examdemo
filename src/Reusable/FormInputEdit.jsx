import React, { useEffect } from "react";
import {
  changeData,
  clickVali,
  errorHandle,
  first_Value,
} from "../Redux/Action/SignUpaction";
import { useDispatch, useSelector } from "react-redux";
import Validation from "../Validation/Validation";
import { changeExamData } from "../Redux/Action/CreateExam";
import ClickValidation from "../Validation/ClickVali";

const FormInputEdit = (prop) => {
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
  } = prop;
  const dispatch = useDispatch();
  const { val, eror, questionError } = useSelector((stat) => stat.SignUp);
  const { Edit_bool, questionno, singleData } = useSelector(
    (stat) => stat.ExamData
  );
  const handleChange = (e) => {
    dispatch(errorHandle(name, Validation(e.target.name, e.target.value, val)));
    dispatch(changeExamData());
    dispatch(clickVali(ClickValidation(val), questionno));
    dispatch(changeData(e.target.value, e.target.name));
  };
  useEffect(() => {
    Edit_bool && questionno === 0 && dispatch(first_Value(singleData[0]));
  }, []);
  const element =
    prop.element === "input" ? (
      <div className="form-group mb-3">
        <label htmlFor="">{Label}</label>
        <input
          type={type}
          name={name}
          error={error}
          value={
            (Edit_bool ? singleData[questionno]?.[name] : "") || val?.[name]
          }
          onChange={handleChange}
          disabled={disabled}
          autoComplete="off"
          placeholder={place}
          className={nameclass}
        />
        <p className="text-danger">{eror[name]}</p>
        <p className="text-danger">{questionError[name]}</p>
      </div>
    ) : prop.element === "radio" ? (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="answer"
          checked={false}
          value={
            (Edit_bool ? singleData[questionno]?.[name] : "") || val?.[name]
          }
          onChange={handleChange}
        />
        <input
          type={type}
          name={name}
          error={error}
          value={
            (Edit_bool ? singleData[questionno]?.[name] : "") || val?.[name]
          }
          onChange={handleChange}
          autoComplete="off"
          disabled={inputdisabled}
          placeholder={place}
          className={nameclass}
        />
        <p className="text-danger">{eror[name]}</p>
        <p className="text-danger">{questionError[name]}</p>
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

export default FormInputEdit;
