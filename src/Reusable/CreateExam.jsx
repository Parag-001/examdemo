import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Handle_Exam,
  NextQuestion,
  PreviousQuestion,
} from "../Redux/Action/CreateExam";
import { ClickVali, Previous, ResetForm } from "../Redux/Action/SignUpaction";
import ClickValidation from "../users/ClickVali";

import FormInput from "./FormInput";

const CreateExam = () => {
  const dispatch = useDispatch();
  const {
    question,
    answer,
    option1,
    option2,
    option3,
    option4,
    subName,
    note,
  } = useSelector((stat) => stat.SignUp.val);
  const { eror, val } = useSelector((stat) => stat.SignUp);
  const { questionno, pre_val, questionData } = useSelector(
    (stat) => stat.ExamData
  );
  const err = Object.values(eror)
    .filter((c) => c !== undefined)
    .some((a) => a !== "");
  const valcheck = Object.values(val).every((c) => c === "");

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
        subName,
        note,
        val,
        valcheck
      )
    );
    dispatch(ResetForm());
    // dispatch(ClickVali(ClickValidation(val)));
  };
  const handlePrivious = (e) => {
    e.preventDefault();
    let a = questionData[questionno - 2];
    questionData.splice(questionData.indexOf(a), 1);
    dispatch(PreviousQuestion());
    dispatch(Previous(pre_val[questionno - 2]));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      Handle_Exam(question, option1, option2, option3, option4, answer, note)
    );
    dispatch(ResetForm());
  };
  const handleSkip = () => {};
  return (
    <>
      <form action="" onSubmit={handleNext}>
        <FormInput
          Label={`Q- ${questionno}`}
          element="input"
          // require={true}
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
          // require={true}
          place="Give Correct Answer"
          name="answer"
          nameclass="exam-input-option"
        />
        {/* <FormInput
          element="input"
          type="text"
          place="Give Note"
          name="note"
          nameclass="exam-input-option"
        /> */}
        {/* <div className="botton">
          <input
            type="button"
            className={`btn btn-primary mx-2 ${
              questionno === 1 ? "disabled" : null
            }`}
            value="Previous"
            onClick={handlePrivious}
          /> */}
        <FormInput
          element="button"
          type="button"
          nameclass={`btn btn-primary mx-2 ${
            questionno === 1 ? "disabled" : null
          }`}
          valname="Previous"
          click={handlePrivious}
        />
        {/* <input
            type="button"
            className={`btn btn-primary mx-2 ${
              questionno === 1 ? "disabled" : null
            }`}
            value="Skip"
            onClick={handleSkip}
          /> */}
        <input
          type="submit"
          className={`btn btn-primary  mx-2 ${
            questionData.length === 14 || err ? "disabled" : null
          }  `}
          value="Next"
        />
        <input
          type="button"
          className={`btn btn-primary mx-2 ${
            questionData.length < 14 ? "" : null
          }`}
          value="Submit"
          onClick={handleSubmit}
        />
        {/* </div> */}
      </form>
    </>
  );
};

export default CreateExam;
