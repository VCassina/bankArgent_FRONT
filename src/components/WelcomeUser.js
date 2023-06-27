import React from "react";
import "../styles/main.css";
import { useSelector } from "react-redux";
import EditUserInfo from "./EditUserInfo";
import GreenButton from "../items/greenButton";

function WelcomeUser({ isEditing, setIsEditing }) {

  const informationFirstname = useSelector((state) => state.informationFirstname);
  const informationLastname = useSelector((state) => state.informationLastname);

  if (isEditing) {
    return <EditUserInfo isEditing={isEditing} setIsEditing={setIsEditing} />;
  }

  return (
    <div className="header">
      <h1>
        Welcome back <br />
        {informationFirstname} {informationLastname}!
      </h1>
      <GreenButton
        className="edit-button"
        onClick={() => {
          setIsEditing(true);
        }}
        content="Edit Name"
      />
    </div>
  );
}

export default WelcomeUser;
