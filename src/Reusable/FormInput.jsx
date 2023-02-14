import React from "react";
import { ChangeData, errorHandle } from "../Redux/Action/SignUpaction";
import { useDispatch, useSelector } from "react-redux";
import Validation from "../users/Validation";
const FormInput = (prop) => {
  const { name, type, place, Label, error, nameclass } = prop;

  const dispatch = useDispatch();
  const { val, eror } = useSelector((stat) => stat.SignUp);
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
          name={name}
          error={error}
          value={val?.[name]}
          onChange={handleChange}
          autoComplete="off"
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
