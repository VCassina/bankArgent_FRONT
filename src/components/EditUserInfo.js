import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputWrapper from "../items/inputWrapper";
import GreenButton from "../items/greenButton";
import uploadUsername from "../helpers/uploadUsername";
import WelcomeUser from "./WelcomeUser";
import EditInfoVerification from "../helpers/infoVerification";

function EditUserInfo({ isEditing, setIsEditing }) {
  
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loggedUserToken);
  const informationUsername = useSelector((state) => state.informationUsername);
  const informationFirstname = useSelector((state) => state.informationFirstname);
  const informationLastname = useSelector((state) => state.informationLastname);
  const [status, setStatus] = useState(null);
  
  // The fusion of 3 values in one useState. Didn't know it was possible.
  const [userInfo, setUserInfo] = useState({
    username: "",
    firstname: "",
    lastname: "",
  });

  // Depending of the name refered, the modification will be applied. Could work if we decide to allow the user to change the first or lastname too.
  const handleInputChange = (input) => (event) => {
    const { value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [input]: value,
    }));
  };



  // Update the DB by contacting the API and then dispatch the isEditing status to bring back WelcomeUser.js.
  const handleInputSave = (choose) => {
    if (choose === true) {
      const newStatus = EditInfoVerification(userInfo.username);
      switch (newStatus) {
        case 0:
          console.log("0")
          uploadUsername(userInfo.username, token, dispatch);
          setIsEditing(!isEditing);
          break;
        case 1:
          console.log("1")
          setStatus(newStatus);
          setErrorMessage("New username doesn't allow special characters.");
          break;
        case 2:
          console.log("2")
          setStatus(newStatus);
          setErrorMessage("New username should be 4 - 16 characters long.");
          break;
        default:
          break;
      }
    } else {
      setIsEditing(!isEditing);
    }
  }

  if (!isEditing) {
    return <WelcomeUser />;
  } 


  return (
    <>
      <h2 className="editUser_form-title">Edit User Info</h2>
      <div className="editUser_form">
        <div className="editUser_form-item">
          <span>User name :</span>
          <InputWrapper
            category="username"
            type="text"
            title=""
            value={userInfo.username}
            onChange={handleInputChange("username")}
            placeholder={informationUsername}
          />
        </div>
        <div className="editUser_form-item">
          <span>First name :</span>
          <InputWrapper
            type="text"
            value={userInfo.firstname}
            placeholder={informationFirstname}
            isDisabled={true}
          />
        </div>
        <div className="editUser_form-item">
          <span>Last name :</span>
          <InputWrapper
            type="text"
            value={userInfo.lastname}
            placeholder={informationLastname}
            isDisabled={true}
          />
        </div>
        {(status === 1 || status === 2) && <span className="errorMessage">{errorMessage}</span>}
      </div>
      <div className="editUser_form-buttonManager">
        <GreenButton
          content="Save"
          className="edit-button-postForm"
          onClick={() => handleInputSave(true)}
        />
        <GreenButton content="Cancel" className="edit-button-postForm"  onClick={() => handleInputSave(false)}/>
      </div>
    </>
  );
}

export default EditUserInfo;