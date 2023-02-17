import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Handle_Exam,
  NextQuestion,
  PreviousQuestion,
} from "../Redux/Action/CreateExam";
import {
  errorHandle,
  ResetForm,
  ClickVali,
} from "../Redux/Action/SignUpaction";
import FormInput from "./FormInput";
import ClickValidation from "../users/ClickVali";
import Validation from "../users/Validation";

const CreateExam = () => {
  const dispatch = useDispatch();
  const { question, answer, option1, option2, option3, option4, subName } =
    useSelector((stat) => stat.SignUp.val);
  const { eror, val, er } = useSelector((stat) => stat.SignUp);
  console.log("er", er);
  const { questionno, questionData } = useSelector((stat) => stat.ExamData);
  // console.log("questionData", questionData[0].question == question);
  const handleNext = (e) => {
    e.preventDefault();
    dispatch(
      NextQuestion(
        question,
        option1,
        option2,
        option3,
        option4,
        answer,
        subName
      )
    );
    dispatch(ResetForm());
    dispatch(ClickVali(ClickValidation(val)));
  };
  const handlePrivious = (e) => {
    e.preventDefault();
    dispatch(PreviousQuestion());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Handle_Exam(question, option1, option2, option3, option4, answer));
  };
  return (
    <>
      <form action="" onSubmit={handleNext}>
        <FormInput
          Label={`Q- ${questionno}`}
          element="input"
          type="text"
          place="Question "
          name="question"
          nameclass="exam-input"
        />
        <FormInput
          element="radio"
          type="text"
          disabled={true}
          place="Option - 1 "
          name="option1"
          nameclass="exam-input-option"
        />
        <FormInput
          element="radio"
          type="text"
          disabled={true}
          place="Option - 2 "
          name="option2"
          nameclass="exam-input-option"
        />
        <FormInput
          element="radio"
          type="text"
          disabled={true}
          place="Option - 3 "
          name="option3"
          nameclass="exam-input-option"
        />
        <FormInput
          element="radio"
          type="text"
          disabled={true}
          place="Option - 4 "
          name="option4"
          nameclass="exam-input-option"
        />
        <FormInput
          element="input"
          type="text"
          place="Give Correct Answer"
          name="answer"
          nameclass="exam-input-option"
        />
        {/* <FormInput
          element="input"
          type="text"
          place="Give Note"
          name="note"
          // disabled={`${questionno < 1 ? "true" : "false"}`}
          nameclass="exam-input-option"
        /> */}
        <div className="botton">
          <input
            type="button"
            className={`btn btn-primary mx-2 ${
              questionno === 1 ? "disabled" : null
            }`}
            value="Previous"
            onClick={handlePrivious}
          />
          <input
            type="submit"
            className={`btn btn-primary  mx-2 ${
              questionno === 15 ||
              Object.values(eror)[0] ||
              Object.values(val).every((c) => c === "")
                ? "disabled"
                : null
            }  `}
            value="Next"
            // onClick={handleNext}
          />
          <input
            type="button"
            className={`btn btn-primary mx-2 ${
              questionno < 15 ? "disabled" : null
            }`}
            value="Submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default CreateExam;
