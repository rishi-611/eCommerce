import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Image, Form, Button } from "react-bootstrap";

const Profile = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

      <Form className="mt-5">
        <Form.Group className="mb-5" controlId="edit-email">
          <Form.Label>Edit Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="edit-pass-curr">
          <Form.Label>Current Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your current Password"
            autoComplete="on"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter New Password"
            autoComplete="off"
          />
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            autoComplete="off"
          />
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default Profile;
