import React, { useState } from "react";
import "../styles/main.css";
import InputWrapper from "../items/inputWrapper";
import { useSelector } from "react-redux";


function EditUserInfo() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handleFirstName = (event) => {
    const value = event.target.value;
    setFirstname(value);
  };
  const handleLastName = (event) => {
    const value = event.target.value;
    setLastname(value);
  };

  const informationUsername = useSelector(
    (state) => state.informationUsername
  );
  const informationFirstname = useSelector(
    (state) => state.informationFirstname
  );
  const informationLastname = useSelector(
    (state) => state.informationLastname
  );


  return (
    <div className="COMING_SOON">
      <h2 className="editUser_form-title">Edit User Info</h2>
      <div className="editUser_form">
        <div className="editUser_form-item">
        <span>User name :</span>
        <InputWrapper
          category="username"
          type="text"
          title=""
          value={username}
          onChange={handleUsernameChange}
          placeholder={informationUsername}
        />
        </div>

        <div className="editUser_form-item">
        <span>First name :</span>
        <InputWrapper
          category="firstname"
          type="text"
          title=""
          value={firstname}
          onChange={handleFirstName}
          placeholder={informationFirstname}  
          isDisabled={true}
        />
        </div>

        <div className="editUser_form-item">
        <span>Last name :</span>
        <InputWrapper
          category="lastname"
          type="text"
          title=""
          value={lastname}
          onChange={handleLastName}
          placeholder={informationLastname}
          isDisabled={true}
        />
        </div>
        

      </div>
    </div>
  );
}

export default EditUserInfo;
