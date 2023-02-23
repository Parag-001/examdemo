import React, { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { allExamData } from "../../Redux/Action/AllExam";

const ViewAllExam = () => {
  const dispatch = useDispatch();
  const { loading, AllExam } = useSelector((state) => state.StudeExamData);
  useEffect(() => {
    dispatch(allExamData());
  }, []);
  const handleExam = () => {};
  return (
    <>
      <h3 className="text-center my-4">View ALL Exam Data</h3>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>EMAIL</th>
              <th>SUBJECT</th>
              <th>NOTES</th>
              <th>GIVE EXAM</th>
            </tr>
          </thead>
          <tbody>
            {AllExam.map((c, ind) => {
              return (
                <tr key={ind}>
                  <td>{c.email}</td>
                  <td>{c.subjectName}</td>
                  <td>{c.notes.map((d) => d)}</td>
                  <td>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleExam(c._id)}
                    >
                      Give Exam
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {loading && (
          <>
            <BallTriangle /> <h2>Loading Data...</h2>
          </>
        )}
      </div>
    </>
  );
};

export default ViewAllExam;
