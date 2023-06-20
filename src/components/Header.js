import React from "react";
import "../styles/main.css";
import BankLogo from "../images/argentBankLogo.png";
import UserIcone from "../items/userIcone";
import UserLogOut from "../items/userLogOut";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../store";

// REDUX will be implemented to modify SignIn to SignOut depending of the state of "isLoggedUser" later.
function Header() {
  const isLoggedUser = useSelector((state) => state.isLoggedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigationSignIn = (event) => {
    event.preventDefault();
    if (isLoggedUser) {
      navigate("/user");
    } else {
      navigate("/sign-in");
    }
  };

  const handleNavigationSignOut = (event) => {
    event.preventDefault();
    dispatch(logoutAction());
  };

  const handleNavigationHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

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
            {isLoggedUser ? "USER" : "Sign in"}
          </span>
        </a>
        <a
          className={isLoggedUser ? "main-nav-item" : "hidden"}
          href="/"
          onClick={handleNavigationSignOut}
        >
          <UserLogOut />
          <span className="title-text">{isLoggedUser ? "Sign Out" : ""}</span>
        </a>
      </div>
    </nav>
  );
}

/* !! CAUTION !!
It's not the same icone as we can see on the static exemple but i didn't find it on fontAwesome.
*/

export default Header;
