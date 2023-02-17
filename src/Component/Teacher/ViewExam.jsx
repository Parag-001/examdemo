import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Particular_Exam } from "../../Redux/Action/CreateExam";

const ViewExam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { examData } = useSelector((stat) => stat.ExamData);
  console.log("examData", examData);
  const handleData = (id) => {
    dispatch(Particular_Exam(id, navigate));
  };
  return (
    <>
      <h3 className="text-center">View Exam Data</h3>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>EMAIL</th>
              <th>SUBJECT</th>
              <th>NOTES</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((c, ind) => {
              return (
                <tr key={ind}>
                  <td>{c.email}</td>
                  <td>{c.subjectName}</td>
                  <td>{c.notes.map((d) => d)}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleData(c._id)}
                    >
                      View Detail
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewExam;
