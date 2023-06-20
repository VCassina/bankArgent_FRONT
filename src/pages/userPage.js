import React, { Fragment, useEffect } from "react";
import "../styles/main.css";
import WelcomeUser from "../components/WelcomeUser";
import Account from "../components/Account";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserPage() {
  // isUserLogged verification.
  const isLoggedUser = useSelector((state) => state.isLoggedUser);
  const navigate = useNavigate();
  console.log(isLoggedUser);

  // Needed for a working navigate redirection.
  useEffect(() => {
    if (!isLoggedUser) {
      navigate("/sign-in");
    }
  }, [isLoggedUser, navigate]);

  if (!isLoggedUser) {
    return null;
  }

  // Dynamic statement for WelcomedUser (with props & Redux) will be implemented soon.
  // The same fact about Account, a map will be deployed for every accountements founded in MongoDB.

  return (
    <>
      <main className="main bg-dark">
        <WelcomeUser />
        <Account />
      </main>
    </>
  );
}

export default UserPage;
