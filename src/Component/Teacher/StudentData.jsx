import React from "react";
import { useEffect } from "react";
import Main from "../../Route/Main";
import { StudentDataShow } from "../../Redux/Action/StudentData";
import { useDispatch, useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
const StudentData = () => {
  const dispatch = useDispatch();
  const { datalist, loading } = useSelector((stat) => stat.StudentDataShow);
  useEffect(() => {
    dispatch(StudentDataShow());
  }, []);
  const viewDetail = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Main />
      <div className="container">
        <h3 className="text-center my-4">Student Data</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Student Name </th>
              <th>Student Email </th>
              <th>Student Status </th>
              <th>View Student Detail </th>
            </tr>
          </thead>
          <tbody>
            {datalist.map((cur) => {
              return (
                <tr key={cur?._id}>
                  <td>{cur.name}</td>
                  <td>{cur.email}</td>
                  <td>{cur.status}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => viewDetail(cur._id)}
                    >
                      View Data
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {loading && (
          <>
            <BallTriangle />
            <h1>Loading...</h1>
          </>
        )}
      </div>
    </>
  );
};

export default StudentData;
