import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ViewData = () => {
  const { viewData } = useSelector((stat) => stat.StudentDataShow);
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-3">View Student Data</h3>
        {console.log("viewData", viewData)}
        {viewData.map((c, ind) => {
          return (
            <div key={ind} className="studdata">
              <div
                className="card mb-3 mt-5 mx-5"
                style={{ maxWidth: "1140px", maxHeight: "150vh" }}
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <Card style={{ width: "20rem", height: "37rem" }}>
                      <Card.Img variant="top" src="./pro3.jpeg" />
                      <Card.Body className="mt-4">
                        <Card.Title>Name : {c.name}</Card.Title>
                        <Card.Text className="mt-4">
                          Email : {c.email}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-8">
                    <div
                      className="grid"
                      style={{
                        display: "grid",
                        marginTop: "5%",
                        gridTemplateColumns: "auto auto",
                      }}
                    >
                      {viewData[0]?.Result.length ? (
                        c?.Result?.map((i, ind) => {
                          return (
                            <div
                              key={ind}
                              className="card text-dark bg-light my-3 mx-4"
                              style={{
                                maxWidth: "18rem",
                              }}
                            >
                              <div className="card-header text-center">
                                Result
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">{i.subjectName}</h5>
                                <p className="card-text">Score : {i.score} </p>
                                <p className="card-text">Rank : {i.rank} </p>
                                <p className="card-text">
                                  Status : {i.resultStatus}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <h3 className="text-center text-danger mt-3">
                          Result Not Found
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewData;
