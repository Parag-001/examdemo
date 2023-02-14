// import React from "react";
// import { useDispatch } from "react-redux";
// import { errorHandle } from "../Redux/Action/SignUpaction";
// import Validation from "../users/Validation";
// import {
//   ChangeExamData,
//   Handle_Exam,
//   NextQuestion,
//   PreviousQuestion,
//   // ResetExam,
// } from "../Redux/Action/CreateExam";
// import FormInput from "./FormInput";

// const Exam = (prop) => {
//   const { quesno, ques, op1, op2, op3, op4, answer } = prop;
//   const dispatch = useDispatch();
//   const handleNext = (e) => {
//     e.preventDefault();
//     dispatch(NextQuestion(ques, op1, op2, op3, op4, answer, quesno));
//     // dispatch(ResetExam());
//   };
//   const handleChange = (e) => {
//     dispatch(
//       errorHandle({
//         [e.target.name]: Validation(e.target.name, e.target.value),
//       })
//     );
//     dispatch(ChangeExamData(e.target.value, e.target.name));
//   };
//   const handlePrivious = (e) => {
//     e.preventDefault();
//     dispatch(PreviousQuestion());
//   };
//   const handleSubmit = () => {
//     // dispatch(ResetExam());
//   };
//   return (
//     <>
//       <div className="container ">
//         <select name="" id="" className="selectSubject btn btn-primary">
//           <option value="Select">Select</option>
//           <option value="English">English</option>
//           <option value="Gujrati">Gujrati</option>
//           <option value="Hindi">Hindi</option>
//           <option value="Frence">Frence</option>
//         </select>
//         <div className="exam">
//           <label htmlFor="">Q - {quesno}</label>
//           <input
//             type="text"
//             name="question"
//             value={ques}
//             className="exam-input"
//             onChange={handleChange}
//             placeholder={`Question - ${quesno}`}
//           />

//           <div className="form-group my-4">
//             <input
//               className="exam-input-option"
//               name="option1"
//               value={op1}
//               placeholder="Option - 1"
//               onChange={handleChange}
//               type="text"
//             />
//           </div>
//           <div className="form-group my-4">
//             <input
//               className="exam-input-option"
//               value={op2}
//               name="option2"
//               placeholder="Option - 2"
//               onChange={handleChange}
//               type="text"
//             />
//           </div>
//           <div className="form-group my-4">
//             <input
//               className="exam-input-option"
//               value={op3}
//               onChange={handleChange}
//               name="option3"
//               placeholder="Option - 3"
//               type="text"
//             />
//           </div>
//           <div className="form-group my-4">
//             <input
//               className="exam-input-option"
//               placeholder="Option - 4"
//               name="option4"
//               value={op4}
//               onChange={handleChange}
//               type="text"
//             />
//           </div>
//           <div className="form-group my-4">
//             <input
//               className="exam-input-option"
//               placeholder="Give Correct Answer"
//               name="answer"
//               value={answer}
//               onChange={handleChange}
//               type="text"
//             />
//           </div>

//           <div className="botton">
//             <input
//               type="button"
//               className={`btn btn-primary mx-2 ${
//                 quesno === 1 ? "disabled" : null
//               }`}
//               value="Previous"
//               onClick={handlePrivious}
//             />
//             <input
//               type="button"
//               className={`btn btn-primary mx-2 ${
//                 quesno === 15 ? "disabled" : null
//               }`}
//               value="Next"
//               onClick={handleNext}
//             />
//             <input
//               type="button"
//               className={`btn btn-primary mx-2 ${
//                 quesno < 15 ? "disabled" : null
//               }`}
//               value="Submit"
//               onClick={handleSubmit}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Exam;
