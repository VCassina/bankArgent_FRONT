import React from "react";
import "../styles/main.css";

function WelcomeUser() {
  return (
    <div className="header">
      <h1>
        Welcome Back <br />
        COMING_SOON!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default WelcomeUser;
