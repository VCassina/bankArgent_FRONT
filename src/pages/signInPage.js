import React, { Fragment, useState, useEffect } from "react";
import "../styles/main.css";
import UserIcone from "../items/userIcone";
import InputWrapper from "../items/inputWrapper";
import Remember from "../items/remember";
import callApiPostUserLogin from "../helpers/callApiPostUserLogin";

function SignInPage() {
  // Will be replaced by Redux later if needed.
  const [redirectUrl, setRedirectUrl] = useState("/sign-in");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // To automatically retrieve values ​​from input fields.
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

  // To test at reload if API is correctly used.
  // callAPI('steve@rogers.com', 'password456');

  const handleSignIn = (event) => {
    // To let the time to the function to work.
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(false);
    // We use our indications into the API with POST.
    callApiPostUserLogin(username, password)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200) {
          console.log(response);
          setRedirectUrl("/user");
        } else {
          setErrorMessage(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  // A way to mean that : "When redirectUrl will be /user, make it happens but not before the useState of redirectUrl is clearly done".
  useEffect(() => {
    if (redirectUrl === "/user") {
      window.location.pathname = redirectUrl;
    }
  }, [redirectUrl]);

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
            <a
              href={redirectUrl}
              className="sign-in-button"
              onClick={handleSignIn}
              disabled={isLoading}
            >
              {isLoading ? "Wait..." : "Sign In"}
            </a>
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
