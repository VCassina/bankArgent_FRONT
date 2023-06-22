import React, { useState } from "react";
import "../styles/main.css";
import { useSelector } from "react-redux";
import EditUserInfo from "./EditUserInfo";

function WelcomeUser() {
  
  const informationFirstname = useSelector(
    (state) => state.informationFirstname
  );
  const informationLastname = useSelector(
    (state) => state.informationLastname
  );
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return <EditUserInfo />;
  }

  return (
    <div className="header">
      <h1>
        Welcome back <br />
        {informationFirstname} {informationLastname}!
      </h1>
      <button className="edit-button" onClick={handleEditClick}>
        Edit Name
      </button>
    </div>
  );
}

export default WelcomeUser