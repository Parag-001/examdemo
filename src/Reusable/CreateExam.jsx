import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import {
  handle_Exam,
  nextQuestion,
  previousQuestion,
} from "../Redux/Action/CreateExam";
import { nextValue, prevValue, resetForm } from "../Redux/Action/SignUpaction";

import FormInput from "./FormInput";

const CreateExam = () => {
  const navigate = useNavigate();
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
  const { eror, val, questionError } = useSelector((stat) => stat.SignUp);
  const { questionno, pre_val, questionData } = useSelector(
    (stat) => stat.ExamData
  );
  const err = Object.values(questionError).every((a) => a !== "");
  const valcheck = Object.values(val).every((c) => c === "");
  const va = Object.values(val).every((c) => c === "");
  const handleNext = (e) => {
    e.preventDefault();
    // va && dispatch(clickVali(ClickValidation(val), questionno));
    !va &&
      dispatch(
        nextQuestion(
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
    !va && dispatch(resetForm());
    !va && dispatch(nextValue(pre_val[questionno + 1]));
  };

  const handlePrivious = (e) => {
    e.preventDefault();
    let a = questionData[questionno - 1];
    dispatch(previousQuestion(questionData.indexOf(a)));
    dispatch(prevValue(pre_val[questionno - 1]));
    questionData.splice(questionData.indexOf(a), 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handle_Exam(
        question,
        option1,
        option2,
        option3,
        option4,
        answer,
        note,
        navigate
      )
    );
    dispatch(resetForm());
  };

  const handleChange = (e) => {
    swal
      .fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          swal.fire("Saved!", "", "success");
          dispatch(
            nextQuestion(
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
          dispatch(resetForm());
          dispatch(nextValue(pre_val[questionno + 1]));
        } else if (result.isDenied) {
          swal.fire("Changes are not saved", "", "info");
        }
      });
  };
  return (
    <>
      <form action="" onSubmit={handleNext}>
        <FormInput
          Label={`Q- ${questionno + 1}`}
          element="input"
          require={true}
          type="text"
          place="Question "
          name="question"
          nameclass="exam-input"
        />
        <FormInput
          element="radio"
          type="text"
          place="Option - 1 "
          name="option1"
          nameclass="exam-input-option"
        />
        <FormInput
          element="radio"
          type="text"
          place="Option - 2 "
          name="option2"
          nameclass="exam-input-option"
        />
        <FormInput
          element="radio"
          type="text"
          // disabled={true}
          place="Option - 3 "
          name="option3"
          nameclass="exam-input-option"
        />
        <FormInput
          element="radio"
          type="text"
          place="Option - 4 "
          name="option4"
          nameclass="exam-input-option"
        />
        <FormInput
          element="input"
          type="text"
          disabled={true}
          require={true}
          place="Give Correct Answer"
          name="answer"
          nameclass="exam-input-option"
        />
        <FormInput
          element="input"
          type="text"
          place="Give Note"
          name="note"
          nameclass="exam-input-option"
        />
        <FormInput
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
          value="Changes"
          onClick={handleChange}
        />
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
            questionData.length < 14 ? "disabled" : null
          }`}
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
};

export default CreateExam;
