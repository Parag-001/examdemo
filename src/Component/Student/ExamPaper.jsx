import React from "react";
import GiveExamStud from "../../Reusable/GiveExamStud";

const ExamPaper = () => {
  const comp = <GiveExamStud />;
  return (
    <>
      <h1 className="text-center text-success mt-3">Exam Paper </h1>
      <div className="container">
        <div className="exam">{comp}</div>
      </div>
    </>
  );
};

export default ExamPaper;
