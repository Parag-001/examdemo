import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BallTriangle } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allExamData } from "../../Redux/Action/AllExam";
import { give_Exam } from "../../Redux/Action/GiveExamStudent";

const ViewAllExam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, AllExam } = useSelector((state) => state.StudeExamData);
  useEffect(() => {
    dispatch(allExamData());
  }, []);
  const handleExam = (id) => {
    dispatch(give_Exam(id, navigate));
  };
  return (
    <>
      <h3 className="text-center my-4">View ALL Exam Data</h3>
      <div className="container studdata">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            rowGap: "20px",
          }}
        >
          {AllExam.map((c, ind) => {
            return (
              <Card key={ind} style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./exam-1.avif" />
                <Card.Body>
                  <Card.Title>{c.subjectName}</Card.Title>
                  <Card.Text className="mt-3">Created By : {c.email}</Card.Text>
                  <Card.Text> Notes : {c.notes.map((d) => d)}</Card.Text>
                  <button
                    className="btn btn-success "
                    onClick={() => handleExam(c._id)}
                  >
                    Give Exam
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </div>

        {loading && (
          <>
            <BallTriangle /> <h2>Loading Data...</h2>
          </>
        )}
      </div>
    </>
  );
};

export default ViewAllExam;
