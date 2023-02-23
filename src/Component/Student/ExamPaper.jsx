import React from "react";
import { useSelector } from "react-redux";
import CreateExam1 from "../../Reusable/CreateExam";

import FormInput from "../../Reusable/FormInput";

const ExamPaper = () => {
  const { questions, questionno, examData } = useSelector(
    (stat) => stat.ExamData
  );
  const comp = <CreateExam1 />;
  const element = comp;
  return (
    <>
      <div className="container">
        <div className="exam">
          {/* <FormInput
            name="subName"
            element="select"
            nameclass={`btn btn-primary mx-2 ${
              questionno > 1 ? "disabled" : null
            }`}
            val={[
              "select-subject",
              "Math111",
              "Sciece111",
              "Englsh11",
              "Socil Science11",
              "Gujrat111",
              "Sankrit11",
              "ab-1",
              "ba-1",
            ]}
          /> */}

          {element}
        </div>
      </div>
      {/* {element} */}
    </>
  );
};

export default ExamPaper;
