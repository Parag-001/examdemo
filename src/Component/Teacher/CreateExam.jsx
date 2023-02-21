import React from "react";
import { useSelector } from "react-redux";
import CreateExam1 from "../../Reusable/CreateExam";

import FormInput from "../../Reusable/FormInput";
import Main from "../../Route/Main";

const CreateExam = () => {
  const { questions, questionno, examData } = useSelector(
    (stat) => stat.ExamData
  );
  const comp = <CreateExam1 />;
  const element = comp;
  return (
    <>
      <div className="container">
        <div className="exam">
          <FormInput
            name="subName"
            element="select"
            nameclass={`btn btn-primary mx-2 ${
              questionno > 1 ? "disabled" : null
            }`}
            val={[
              "select-subject",
              "Maths111",
              "Science111",
              "English11",
              "Social1 Science11",
              "Gujrati111",
              "Sanskrit11",
              "ab+1",
              "ba+1",
            ]}
          />

          {element}
        </div>
      </div>
      {/* {element} */}
    </>
  );
};

export default CreateExam;
