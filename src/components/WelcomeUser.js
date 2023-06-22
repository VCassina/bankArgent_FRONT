import React from "react";
import "../styles/main.css";
import { useSelector } from "react-redux";

function WelcomeUser() {
  const informationFirstname = useSelector(
    (state) => state.informationFirstname
  );
  const informationLastname = useSelector((state) => state.informationLastname);

  return (
    <div className="header">
      <h1>
        Welcome back <br />
        {informationFirstname} {informationLastname}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default WelcomeUser;
