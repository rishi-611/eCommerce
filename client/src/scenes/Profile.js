import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Image, Form, Button } from "react-bootstrap";

import { editUserName, editPassword } from "../store/actions/userActions";
import { setAlert } from "../store/actions/alertActions";

const Profile = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user?.name || "");

  const [passForm, setPassForm] = useState({
    currPass: "",
    newPass: "",
    newPass2: "",
  });

  const handleNameSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserName(name));
  };

  const handlePassForm = (e) => {
    e.preventDefault();
    const { newPass, newPass2 } = passForm;

    if (newPass != newPass2) {
      return dispatch(
        setAlert("danger", "Passwords do not match. Please try again!")
      );
    }

    dispatch(editPassword(passForm));
  };

  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <React.Fragment>
      <div className="row bg-primary p-4">
        <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
          <Image
            roundedCircle
            src="https://www.gravatar.com/avatar/0957824789d2a9438ad035068a55d523?s=200&d=mm&r=pghttps://www.gravatar.com/avatar/0957824789d2a9438ad035068a55d523?s=200&d=mm&r=pg"
            alt="user image"
            fluid
          ></Image>
        </div>
        <div className="col-12 col-sm-8 pt-3 pt-sm-0 d-flex flex-column justify-content-center align-items-center align-items-sm-start ">
          <h3 className="profile-name text-light">{user.name}</h3>
          <h5 className="profile-email text-light">{user.email}</h5>
        </div>
      </div>

      <div className="mt-5 ">
        <Form
          className="profile-form-box  text-center"
          onSubmit={handleNameSubmit}
        >
          {" "}
          <Form.Group className="mb-5" controlId="edit-email">
            <Form.Label>Edit Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              required
            />
            <Button type="submit">
              Edit<i className="fas fa-pencil-alt"></i>
            </Button>
          </Form.Group>
        </Form>

        <Form onSubmit={handlePassForm}>
          <Form.Group className="mb-3" controlId="edit-pass-curr">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your current Password"
              autoComplete="on"
              onChange={(e) =>
                setPassForm((passForm) => ({
                  ...passForm,
                  [e.target.name]: e.target.value,
                }))
              }
              value={passForm.currPass}
              name="currPass"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter New Password"
              autoComplete="off"
              onChange={(e) =>
                setPassForm((passForm) => ({
                  ...passForm,
                  [e.target.name]: e.target.value,
                }))
              }
              value={passForm.newPass}
              name="newPass"
              required
            />
            <Form.Control
              type="password"
              placeholder="Confirm New Password"
              autoComplete="off"
              onChange={(e) =>
                setPassForm((passForm) => ({
                  ...passForm,
                  [e.target.name]: e.target.value,
                }))
              }
              value={passForm.newPass2}
              name="newPass2"
              required
            />
            <Button type="submit" className="d-block m-auto">
              Edit<i className="fas fa-pencil-alt"></i>
            </Button>
          </Form.Group>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Profile;
