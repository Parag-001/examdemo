import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Handle_Exam,
  NextQuestion,
  PreviousQuestion,
} from "../Redux/Action/CreateExam";
import { errorHandle, ResetForm } from "../Redux/Action/SignUpaction";
import Validation from "../users/Validation";
import FormInput from "./FormInput";

const CreateExam = () => {
  const dispatch = useDispatch();
  const { question, answer, option1, option2, option3, option4, subName } =
    useSelector((stat) => stat.SignUp.val);
  const { eror, val } = useSelector((stat) => stat.SignUp);
  const { questionno } = useSelector((stat) => stat.ExamData);
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
      <FormInput
        Label={`Q- ${questionno}`}
        element="input"
        type="text"
        place="Question "
        name="question"
        nameclass="exam-input"
      />
      <FormInput
        element="input"
        type="text"
        place="Option - 1 "
        name="option1"
        nameclass="exam-input-option"
      />
      <FormInput
        element="input"
        type="text"
        place="Option - 2 "
        name="option2"
        nameclass="exam-input-option"
      />
      <FormInput
        element="input"
        type="text"
        place="Option - 3 "
        name="option3"
        nameclass="exam-input-option"
      />
      <FormInput
        element="input"
        type="text"
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
          type="button"
          className={`btn btn-primary  mx-2 ${
            questionno === 15 ||
            Object.values(eror)[0] ||
            Object.values(val).every((c) => c === "")
              ? "disabled"
              : null
          }  `}
          value="Next"
          onClick={handleNext}
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
    </>
  );
};

export default CreateExam;
