import React from "react";
import { BallTriangle } from "react-loader-spinner";
import { useSelector } from "react-redux";

const ViewExamData = () => {
  const { singleExamData, loading } = useSelector((stat) => stat.ExamData);
  return (
    <>
      <h2 className="text-center my-3">View Exam Detail </h2>
      <div className="container studdata">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>QUESTIONS</th>
              <th>OPTIONS</th>
              <th>ANSWER</th>
            </tr>
          </thead>
          <tbody>
            {singleExamData.map((c) => {
              return c.questions.map((a, ind) => {
                return (
                  <tr key={ind}>
                    <td>{a.question}</td>
                    <td>
                      {a.options.map((s, no) => {
                        return (
                          <td
                            key={no}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1",
                            }}
                          >
                            {s}
                          </td>
                        );
                      })}
                    </td>
                    <td>{a.answer}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
        {loading && (
          <>
            <BallTriangle /> <h1>Loading data...</h1>
          </>
        )}
      </div>
    </>
  );
};

export default ViewExamData;
