import React, { useEffect, useState } from "react";
import "../styles/main.css";
import WelcomeUser from "../components/WelcomeUser";
import Account from "../components/Account";
import tokenChecking from "../helpers/tokenChecking";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUserTokenStatus } from "../store";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const actualToken = useSelector((state) => state.loggedUserToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      // isUserLogged verification.
      await tokenChecking(actualToken, dispatch, setLoggedUserTokenStatus, navigate);
      setLoading(false);
    };
    checkToken();
  }, [actualToken, dispatch, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
