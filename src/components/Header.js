import React from "react";
import "../styles/main.css";
import BankLogo from "../images/argentBankLogo.png";
import UserIcone from "../items/userIcone";
import UserLogOut from "../items/userLogOut";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUserToken } from "../store";
import tokenChecking from "../helpers/tokenChecking";

// REDUX will be implemented to modify SignIn to SignOut depending of the state of "isLoggedUser" later.
function Header() {

  // Checking of the status, am i loged-in ?
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUserTokenStatus = useSelector(
    (state) => state.loggedUserTokenStatus
  );
  console.log("loggedUserTokenStatus : ", loggedUserTokenStatus)

  const handleNavigationSignOut = (event) => {
    event.preventDefault();
    dispatch(resetUserToken());
    tokenChecking("", dispatch, null, navigate);
  };

  const handleNavigationHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleNavigationSignIn = (event) => {
    event.preventDefault();
    navigate("/sign-in");
  }

  // It has to be a <nav> to respect the given main.css as well.
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/" onClick={handleNavigationHome}>
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="main-nav-title">
        <a className="main-nav-item" href="/" onClick={handleNavigationSignIn}>
          <UserIcone />
          <span className="title-text">
            {loggedUserTokenStatus ? "USER" : "Sign in"}
          </span>
        </a>
        <a
          className={loggedUserTokenStatus ? "main-nav-item" : "hidden"}
          href="/"
          onClick={handleNavigationSignOut}
        >
          <UserLogOut />
          <span className="title-text">{loggedUserTokenStatus ? "Sign Out" : ""}</span>
        </a>
      </div>
    </nav>
  );
}

/* !! CAUTION !!
It's not the same icone as we can see on the static exemple but i didn't find it on fontAwesome.
*/

export default Header;
