import React from "react";
import { useSelector } from "react-redux";

const ViewExamData = () => {
  const { singleExamData } = useSelector((stat) => stat.ExamData);
  console.log("singleExamData", singleExamData);
  return (
    <>
      <h2 className="text-center my-3">View Exam Detail </h2>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>QUESTIONS</th>
              <th>OPTIONS</th>
              <th>ANSWER</th>
            </tr>
          </thead>
          <tbody>
            {singleExamData.map((c, ind) => {
              return c.questions.map((a) => {
                return (
                  <tr key={ind}>
                    <td>{a.question}</td>
                    <td>
                      {a.options.map((s, ind) => {
                        return (
                          <tr>
                            <td>{s}</td>
                          </tr>
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
      </div>
    </>
  );
};

export default ViewExamData;
