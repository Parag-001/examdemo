import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../Route/Main";
const ViewData = () => {
  const { viewData } = useSelector((stat) => stat.StudentDataShow);
  return (
    <>
      <h3 className="text-center">View Student Data</h3>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody>
            {viewData.map((c) => {
              return (
                <tr key={c._id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>RANK</th>
                          <th>SCORE</th>
                          <th>RESULT STATUS</th>
                          <th>SUBJECT NAME</th>
                          <th>ANSWER</th>
                        </tr>
                      </thead>
                      <tbody>
                        {c.Result.map((i, ind) => {
                          return (
                            <tr key={ind}>
                              <td>{i.rank}</td>
                              <td>{i.resultStatus}</td>
                              <td>{i.score}</td>
                              <td>{i.subjectName}</td>
                              <td>
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>QUESTION</th>
                                      <th>ANS</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {i.studentAnswer.map((j, ind) => {
                                      return (
                                        <tr key={ind}>
                                          <td>{j.question}</td>
                                          <td>{j.answer}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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

export default ViewData;
