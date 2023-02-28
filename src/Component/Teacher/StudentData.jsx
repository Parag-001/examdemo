import React from "react";
import { useEffect } from "react";
import {
  studentDataShow,
  particular_Data,
} from "../../Redux/Action/StudentData";
import { useDispatch, useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
const StudentData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { datalist, loading } = useSelector((stat) => stat.StudentDataShow);
  useEffect(() => {
    dispatch(studentDataShow());
  }, []);
  const viewDetail = (i) => {
    dispatch(particular_Data(i, navigate));
  };
  return (
    <>
      <div className="container studdata">
        <h3 className="text-center my-4">Student Data</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            rowGap: "20px",
          }}
        >
          {datalist.map((c, ind) => {
            return (
              <Card key={ind} style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./pro3.jpeg" />
                <Card.Body>
                  <Card.Title>Name : {c.name}</Card.Title>
                  <Card.Text className="mt-3">Email : {c.email}</Card.Text>
                  <Card.Text>Status : {c.status}</Card.Text>
                  <button
                    className="btn btn-primary"
                    onClick={() => viewDetail(c._id)}
                  >
                    View Details
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </div>

        {loading && (
          <>
            <BallTriangle />
            <h1>Loading...</h1>
          </>
        )}
      </div>
    </>
  );
};

export default StudentData;
