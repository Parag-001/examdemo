import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edit_Profile, stud_Profile } from "../../Redux/Action/AllExam";
import EditProfile from "../../Reusable/EditProfile";

const StudProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profileData } = useSelector((stat) => stat.StudeExamData);
  useEffect(() => {
    dispatch(stud_Profile());
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(stud_Profile());
  };
  const handleChange = () => {
    dispatch(edit_Profile(navigate));
  };
  return (
    <>
      <Card style={{ width: "30rem", margin: "5% auto" }}>
        <Card.Img variant="top" src="./pro.jpg" />
        <Card.Body>
          <Card.Title>Name : {profileData.name}</Card.Title>
          <Card.Text className="mt-3">Email : {profileData.email}</Card.Text>
          <Card.Text className="mt-3">Role : {profileData.role}</Card.Text>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => handleEdit()}
          >
            Edit Profile
          </button>
          <button
            className="btn btn-primary mx-5"
            onClick={() => navigate("/resetpassword")}
          >
            Reset Password
          </button>
        </Card.Body>
      </Card>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Edit Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <EditProfile
                element="input"
                Label="Name : "
                type="text"
                name="name"
                nameclass="form-control"
              />
              {/* <EditProfile
                element="input"
                Label="Email : "
                type="text"
                name="email"
                nameclass="form-control"
              /> */}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleChange()}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudProfile;
