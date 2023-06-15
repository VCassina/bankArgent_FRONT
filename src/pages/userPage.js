import React, { Fragment } from "react";
import "../styles/main.css";
import WelcomeUser from "../components/WelcomeUser";
import Account from "../components/Account";


function UserPage() {

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
