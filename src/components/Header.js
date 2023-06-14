import React from "react";
import "../styles/main.css";
import BankLogo from "../images/argentBankLogo.png";
import UserIcone from "../items/userIcone";


function Header() {
  // It has to be a <nav> to respect the given main.css as well.
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in">
          <UserIcone />
          Sign In
        </a>
      </div>
    </nav>
  );
}

/* !! CAUTION !!
It's not the same icone as we can see on the static exemple but i didn't find it on fontAwesome.
*/

export default Header;
