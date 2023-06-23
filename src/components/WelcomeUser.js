import React from "react";
import "../styles/main.css";
import { useSelector, useDispatch } from "react-redux";
import EditUserInfo from "./EditUserInfo";
import GreenButton from "../items/greenButton";
import { setScriptStatusIsEditing } from "../store";

function WelcomeUser() {
  const dispatch = useDispatch();
  const informationFirstname = useSelector((state) => state.informationFirstname);
  const informationLastname = useSelector((state) => state.informationLastname);
  const isEditing = useSelector((state) => state.scriptStatusIsEditing);

  // I can't dispatch directly when giving it to an other component.
  const handleEditClick = () => {
    dispatch(setScriptStatusIsEditing(true));
  };

  if (isEditing) {
    return (
      <EditUserInfo/>
    );
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
