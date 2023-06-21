import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import UserIcone from "../items/userIcone";
import InputWrapper from "../items/inputWrapper";
import Remember from "../items/remember";
import callApiPostUserLogin from "../helpers/callApiPostUserLogin";
import { loginAction } from "../store";
import { useDispatch } from 'react-redux';
import { setUserToken } from '../store';

function SignInPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(false);

    callApiPostUserLogin(username, password)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200) {
            // Verification.
          dispatch(loginAction);
          dispatch(setUserToken(response.body.token));
          console.log()
          navigate("/user");
        } else {
          setErrorMessage(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

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
              value={username}
              onChange={handleUsernameChange}
            />
            <InputWrapper
              category="password"
              type="password"
              title="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Remember />
            <button
              className="sign-in-button"
              onClick={handleSignIn}
              disabled={isLoading}
            >
              {isLoading ? "Wait..." : "Sign In"}
            </button>
            {errorMessage && (
              <p className="errorMessage">Informations incorrectes</p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default SignInPage;
