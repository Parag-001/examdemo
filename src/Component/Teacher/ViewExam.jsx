import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteData,
  particular_Exam,
  viewExamDetail,
} from "../../Redux/Action/CreateExam";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BallTriangle } from "react-loader-spinner";
import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ViewExam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allExamData, loading, singleExamData } = useSelector(
    (stat) => stat.ExamData
  );
  let a = singleExamData[0]?.questions.map((a) => {
    return {
      question: a.question,
      answer: a.answer,
      option1: a.options[0],
      option2: a.options[1],
      option3: a.options[2],
      option4: a.options[3],
    };
  });
  const handleData = (id) => {
    dispatch(particular_Exam(id, navigate, "/viewexamdata", a));
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(deleteData(id));
      }
    });
  };
  useEffect(() => {
    dispatch(viewExamDetail());
  }, [deleteData()]);
  const handleEdit = (id, subject, note) => {
    dispatch(particular_Exam(id, navigate, "/editexam", subject, note));
  };
  return (
    <>
      <h3 className="text-center my-4">View Exam Data</h3>
      <div className="container studdata">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            rowGap: "20px",
          }}
        >
          {allExamData.map((c, ind) => {
            return (
              <Card key={ind} style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./exam-paper.webp" />
                <Card.Body>
                  <Card.Title>{c.subjectName}</Card.Title>
                  <Card.Text className="mt-3">Created By : {c.email}</Card.Text>
                  <Card.Text> Notes : {c.notes.map((d) => d)}</Card.Text>
                  <button
                    className="btn btn-primary mx-4"
                    onClick={() => handleData(c._id)}
                  >
                    View Detail
                  </button>
                  <FiEdit
                    className="fs-4 mx-2 text-success"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      handleEdit(
                        c._id,
                        c.subjectName,
                        c.notes.map((d) => d)
                      )
                    }
                  />
                  <FaTrashAlt
                    className="fs-4 mx-3 text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(c._id)}
                  />
                </Card.Body>
              </Card>
            );
          })}
        </div>
        {loading && (
          <>
            <BallTriangle /> <h1>Loading...</h1>
          </>
        )}
      </div>
    </>
  );
};

export default ViewExam;
