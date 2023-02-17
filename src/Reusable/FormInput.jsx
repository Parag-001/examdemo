import React from "react";
import { ChangeData, errorHandle } from "../Redux/Action/SignUpaction";
import { useDispatch, useSelector } from "react-redux";
import Validation from "../users/Validation";
// import ClickValidation from "../users/ClickVali";
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
  } = prop;

  const dispatch = useDispatch();
  const { val, eror } = useSelector((stat) => stat.SignUp);
  // console.log(
  //   "Object.",

  //   Object.entries(val).map(([key, value]) =>
  //     errorHandle({ [key]: Validation(key, value, val) })
  //   )
  // );
  const handleChange = (e) => {
    dispatch(
      errorHandle({ [name]: Validation(e.target.name, e.target.value, val) })
    );
    dispatch(ChangeData(e.target.value, name));
  };
  const element =
    prop.element === "input" ? (
      <div className="form-group mb-3">
        <label htmlFor="">{Label}</label>
        <input
          type={type}
          required
          name={name}
          error={error}
          value={val?.[name]}
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
          required
          name={name}
          error={error}
          value={val?.[name]}
          onChange={handleChange}
          autoComplete="off"
          disabled={inputdisabled}
          placeholder={place}
          className={nameclass}
        />
        <p className="text-danger">{eror[name]}</p>
      </div>
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
