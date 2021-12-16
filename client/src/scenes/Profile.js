import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return <div>Profile</div>;
};

export default Profile;
