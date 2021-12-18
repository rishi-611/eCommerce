import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

const Profile = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <Container className="bg-primary p-4">
      <div className="row">
        <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
          <Image
            roundedCircle
            src="https://www.gravatar.com/avatar/0957824789d2a9438ad035068a55d523?s=200&d=mm&r=pghttps://www.gravatar.com/avatar/0957824789d2a9438ad035068a55d523?s=200&d=mm&r=pg"
            alt="user image"
            fluid
          ></Image>
        </div>
        <div className="col-12 col-sm-8 d-flex flex-column justify-content-center">
          <h3 className="profile-name text-light">{user.name}</h3>
          <h5 className="profile-email text-light">{user.email}</h5>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
