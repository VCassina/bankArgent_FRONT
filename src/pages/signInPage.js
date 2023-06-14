import React, { Fragment } from "react";
import "../styles/main.css";
import UserIcone from "../items/userIcone";
import InputWrapper from "../items/inputWrapper";
import Remember from "../items/remember";

function SignInPage() {
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <UserIcone />
          <h1>Sign In</h1>
        <form>
          <InputWrapper category="username" type="text" title="Username" />
          <InputWrapper category="password" type="password" title="Password" />
          <Remember />
          <a href="./user.html" className="sign-in-button">Sign In</a>
        </form>
        </section>
      </main>
    </>
  );
}

export default SignInPage;
