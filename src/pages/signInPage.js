import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import UserIcone from "../items/userIcone";
import InputWrapper from "../items/inputWrapper";
import Remember from "../items/remember";
import callAPI from "../helpers/callApi";
import { useDispatch } from "react-redux";
import { setUserToken, setLoggedUserTokenStatus } from "../store";
import GreenButton from "../items/greenButton";
import CheckingInformation from "../helpers/infoVerification";

function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessageContent, setErrorMessageContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleLogInChange = (input) => (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [input]: value,
    }));
  };

  // Sending information to the API.
  const handleSignIn = () => {
  setIsLoading(true);
const newStatusEmail = CheckingInformation(formData.username);
const newStatusPassword = CheckingInformation(formData.password);

switch (true) {
  case newStatusEmail === 1 || newStatusPassword === 1:
    setIsLoading(false);
    setErrorMessageContent("Forbidden characters detected.");
    setErrorMessage(true);
    return;
    default:
      callAPI(formData.username, formData.password)
        .then((response) => {
          setIsLoading(false);
          if (response?.status === 200) {
            dispatch(setLoggedUserTokenStatus(true));
            dispatch(setUserToken(response.body.token));
            navigate("/user");
          } else {
            setErrorMessageContent("Wrong information.");
            setErrorMessage(true);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessageContent("Error occurred.");
          setErrorMessage(true);
        });
      break;
  }}

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <UserIcone />
          <h1>Sign In</h1>
          <form>
            <InputWrapper
              category="username"
              type="text"
              title="Username"
              value={formData.username}
              onChange={handleLogInChange("username")}
            />
            <InputWrapper
              category="password"
              type="password"
              title="Password"
              value={formData.password}
              onChange={handleLogInChange("password")}
            />
            <Remember />
            <GreenButton
              className="sign-in-button"
              onClick={handleSignIn}
              disabled={isLoading}
              preventDefault={true}
              content={isLoading ? "Wait..." : "Sign In"}
            />
            {errorMessage && (
              <p className="errorMessage">{errorMessageContent}</p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default SignInPage;