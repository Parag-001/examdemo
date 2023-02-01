import React from "react";
import { ChangeData } from "../Redux/Action/Action";
import { useDispatch } from "react-redux";

const FormInput = (prop) => {
  const { name, type, place, Label } = prop;
  const dispatch = useDispatch();

  const element =
    prop.element === "input" ? (
      <div className="form-group mb-3">
        <label htmlFor="">{Label}</label>
        <input
          type={type}
          name={type}
          onChange={(e) => dispatch(ChangeData(e.target.value, name))}
          autoComplete="off"
          placeholder={place}
          className="form-control"
        />
      </div>
    ) : (
      <div className="form-group mb-3">
        <label htmlFor="">{Label}</label>
        <select
          name={name}
          className="form-select"
          onChange={(e) => dispatch(ChangeData(e.target.value, name))}
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
