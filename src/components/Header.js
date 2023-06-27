import React from "react";
import "../styles/main.css";
import BankLogo from "../images/argentBankLogo.png";
import UserIcone from "../items/userIcone";
import UserLogOut from "../items/userLogOut";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUserToken } from "../store";
import tokenChecking from "../helpers/tokenInfoRequest";

function Header() {
  // Checking of the status, am i loged-in ?
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUserTokenStatus = useSelector((state) => state.loggedUserTokenStatus);
  const informationFirstname = useSelector((state) => state.informationFirstname);

  // Depending of where i do need to navigate.
  const handleNavigation = (navigationInput) => (event) => {
    event.preventDefault();
    switch (navigationInput) {
      case "home":
        navigate("/");
        break;
      case "signIn":
        navigate("/sign-in");
        break;
      case "user":
        navigate("/user");
        break;
      case "signOut":
        // Can't group it because Redux is weird-buildt.
        dispatch(resetUserToken());
        tokenChecking("", dispatch, navigate);
        break;
      default:
        break;
    }
  };

  // It has to be a <nav> to respect the given main.css as well.
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/" onClick={handleNavigation("home")}>
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="main-nav-title">
        <a
          className="main-nav-item"
          href="/"
          onClick={
            loggedUserTokenStatus
              ? handleNavigation("user")
              : handleNavigation("signIn")
          }
        >
          <UserIcone />
          <span className="title-text">
            {loggedUserTokenStatus ? informationFirstname : "Sign in"}
          </span>
        </a>
        <a
          className={loggedUserTokenStatus ? "main-nav-item" : "hidden"}
          href="/"
          onClick={handleNavigation("signOut")}
        >
          <UserLogOut />
          <span className="title-text">
            {loggedUserTokenStatus ? "Sign Out" : ""}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Header;