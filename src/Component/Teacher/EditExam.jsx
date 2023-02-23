import React from "react";
import { useSelector } from "react-redux";
import EditExamData from "../../Reusable/EditExam";
import FormInputEdit from "../../Reusable/FormInputEdit";

const EditExam = () => {
  const { questionno, singleExamData } = useSelector((stat) => stat.ExamData);
  const comp = <EditExamData />;
  const element = comp;

  return (
    <>
      <h1 className="text-center mt-3 text-success">Edit Exam</h1>
      <div className="container">
        <div className="exam">
          <FormInputEdit
            name="subName"
            element="select"
            nameclass={`btn btn-primary mx-2 ${
              questionno > 0 ? "disabled" : null
            }`}
            val={[
              "select-subject",
              "first1",
              "Sci11",
              "Eng11",
              "Social1",
              "NewGuj",
              "Some",
              "ILTS",
              "PTE",
              "ba-1",
              "Sankrit11",
              "Socil Science11",
              "ab-1",
            ]}
          />
          {element}
        </div>
      </div>
    </>
  );
};

export default EditExam;
