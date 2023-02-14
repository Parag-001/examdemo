import React from "react";
import { useSelector } from "react-redux";
import CreateExam1 from "../../Reusable/CreateExam";
import Exam from "../../Reusable/Exam";
import FormInput from "../../Reusable/FormInput";

const CreateExam = () => {
  const { questions, questionno, questionData } = useSelector(
    (stat) => stat.ExamData
  );
  console.log("quesionData :>> ", questionData);
  const { question, option1, option2, option3, option4, answer } = questions;
  const comp = (
    // <Exam
    //   quesno={questionno}
    //   ques={question}
    //   op1={option1}
    //   op2={option2}
    //   op3={option3}
    //   op4={option4}
    //   answer={answer}
    // />
    <CreateExam1 />
  );
  const element =
    questionno === 1
      ? comp
      : questionno === 2
      ? comp
      : questionno === 3
      ? comp
      : questionno === 4
      ? comp
      : questionno === 5
      ? comp
      : questionno === 6
      ? comp
      : questionno === 7
      ? comp
      : questionno === 8
      ? comp
      : questionno === 9
      ? comp
      : questionno === 10
      ? comp
      : questionno === 11
      ? comp
      : questionno === 12
      ? comp
      : questionno === 13
      ? comp
      : questionno === 14
      ? comp
      : comp;

  return (
    <>
      <h2 className="text-center">Create Exam</h2>
      <div className="container">
        <div className="exam">
          <FormInput
            name="subName"
            element="select"
            nameclass={`btn btn-primary mx-2 ${
              questionno > 1 ? "disabled" : null
            }`}
            val={[
              "select",
              "Maths",
              "Science",
              "English",
              "Social Science",
              "Gujrati",
              "Sanskrit",
              "a",
              "b",
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
