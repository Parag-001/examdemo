import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert2";
import {
  handle_Exam,
  nextQuestion,
  previousQuestion,
} from "../Redux/Action/CreateExam";
import {
  change_Exam_Bool,
  student_Data,
  submitExam,
} from "../Redux/Action/GiveExamStudent";
import {
  clickVali,
  nextValue,
  prevValue,
  resetForm,
} from "../Redux/Action/SignUpaction";
import ClickValidation from "../Validation/ClickVali";

import FormInput from "./FormInput";
import GiveExamInput from "./GiveExamInput";

const GiveExamStud = () => {
  const dispatch = useDispatch();
  const { id, answer, subName, note } = useSelector((stat) => stat.SignUp.val);
  const { eror, val, questionError } = useSelector((stat) => stat.SignUp);
  const { questionno, pre_val, questionData } = useSelector(
    (stat) => stat.ExamData
  );
  const { examPaper, studData } = useSelector((stat) => stat.Give_Exam_Paper);
  const err = Object.values(questionError).every((a) => a !== "");
  const valcheck = Object.values(val).every((c) => c === "");
  const va = Object.values(val).every((c) => c === "");

  const handleNext = (e) => {
    e.preventDefault();
    va && dispatch(clickVali(ClickValidation(val), questionno));
    !va && dispatch(student_Data(id, answer));
    dispatch(nextQuestion());
    !va && dispatch(resetForm());
    dispatch(change_Exam_Bool(val));
    !va && dispatch(nextValue(examPaper[questionno + 1]));
  };

  const handlePrivious = (e) => {
    e.preventDefault();
    dispatch(previousQuestion());
    dispatch(prevValue(examPaper[questionno - 1]));
    studData.splice(questionno - 1, 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitExam(id, answer));
    dispatch(resetForm());
  };

  return (
    <>
      <form action="" onSubmit={handleNext}>
        <GiveExamInput
          Label={`Q- ${questionno + 1}`}
          element="input"
          require={true}
          type="text"
          place="Question "
          name="question"
          nameclass="exam-input"
        />
        <GiveExamInput
          element="radio"
          type="text"
          place="Option - 1 "
          name="option1"
          nameclass="exam-input-option"
        />
        <GiveExamInput
          element="radio"
          type="text"
          place="Option - 2 "
          name="option2"
          nameclass="exam-input-option"
        />
        <GiveExamInput
          element="radio"
          type="text"
          // disabled={true}
          place="Option - 3 "
          name="option3"
          nameclass="exam-input-option"
        />
        <GiveExamInput
          element="radio"
          type="text"
          place="Option - 4 "
          name="option4"
          nameclass="exam-input-option"
        />
        {/* <GiveExamInput
          element="input"
          type="text"
          disabled={true}
          require={true}
          place="Give Correct Answer"
          //   name="answer"
          nameclass="exam-input-option"
        /> */}

        <GiveExamInput
          element="button"
          type="button"
          nameclass={`btn btn-primary mx-2 ${
            questionno === 0 ? "disabled" : null
          }`}
          valname="Previous"
          click={handlePrivious}
        />
        <input
          type="button"
          className={`btn btn-primary mx-2 ${
            Object.values(val).every((c) => c === "") ? "disabled" : null
          }`}
          value="Skip"
        />
        <input
          type="submit"
          className={`btn btn-primary  mx-2 ${
            questionno === 6 ? "disabled" : null
          }  `}
          value="Next"
        />
        <input
          type="button"
          className={`btn btn-primary mx-2 ${
            questionno < 6 ? "disabled" : null
          }`}
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
};

export default GiveExamStud;
