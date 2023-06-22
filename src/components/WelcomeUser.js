import React, { useState } from "react";
import "../styles/main.css";
import { useSelector } from "react-redux";
import EditUserInfo from "./EditUserInfo";
import GreenButton from "../items/greenButton";

function WelcomeUser() {
  const informationFirstname = useSelector(
    (state) => state.informationFirstname
  );
  const informationLastname = useSelector((state) => state.informationLastname);
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
      <GreenButton
        className="edit-button"
        onClick={handleEditClick}
        content="Edit Name"
      />
    </div>
  );
}

export default WelcomeUser;
