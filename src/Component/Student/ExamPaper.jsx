import React from "react";
import { useSelector } from "react-redux";
import CreateExam1 from "../../Reusable/CreateExam";

const ExamPaper = () => {
  const { questions, questionno, examData } = useSelector(
    (stat) => stat.ExamData
  );
  const { examPaper } = useSelector((stat) => stat.Give_Exam_Paper);
  const comp = <CreateExam1 />;
  const element = comp;
  console.log("examPaper", examPaper);
  return (
    <>
      <h1 className="text-center text-success mt-3">Exam Paper </h1>
      <div className="container">
        <div className="exam">{element}</div>
      </div>
      {/* {element} */}
    </>
  );
};

export default ExamPaper;
