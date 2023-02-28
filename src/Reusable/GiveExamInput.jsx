import React, { useEffect } from "react";
import {
  changeData,
  clickVali,
  errorHandle,
  first_Value_Exam,
} from "../Redux/Action/SignUpaction";
import { useDispatch, useSelector } from "react-redux";
import Validation from "../Validation/Validation";
import ClickValidation from "../Validation/ClickVali";
import { changeGiveExamData } from "../Redux/Action/GiveExamStudent";

const GiveExamInput = (prop) => {
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
  const { questionno } = useSelector((stat) => stat.ExamData);
  const { Exam_bool, examPaper } = useSelector((stat) => stat.Give_Exam_Paper);

  const handleChange = (e) => {
    dispatch(errorHandle(name, Validation(e.target.name, e.target.value, val)));
    dispatch(changeGiveExamData());
    dispatch(clickVali(ClickValidation(val), questionno));
    dispatch(changeData(e.target.value, e.target.name));
  };

  useEffect(() => {
    Exam_bool && dispatch(first_Value_Exam(examPaper[0]));
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
            (Exam_bool ? examPaper[questionno]?.[name] : "") || val?.[name]
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
            (Exam_bool ? examPaper[questionno]?.[name] : "") || val?.[name]
          }
          onChange={handleChange}
        />
        <input
          type={type}
          name={name}
          error={error}
          value={
            (Exam_bool ? examPaper[questionno]?.[name] : "") || val?.[name]
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
    ) : (
      <input
        type={type}
        onClick={click}
        className={nameclass}
        value={valname}
      />
    );
  return <>{element}</>;
};

export default GiveExamInput;
