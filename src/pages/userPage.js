import React, { useState } from "react";
import "../styles/main.css";
import WelcomeUser from "../components/WelcomeUser";
import Account from "../components/Account";
import tokenChecking from "../helpers/tokenInfoRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransactionReading from "../components/TransactionReading";

function UserPage() {
  const actualToken = useSelector((state) => state.loggedUserToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const isReadingTransaction = useSelector((state) => state.scriptStatusIsReadingTransaction);

  const checkToken = async () => {
    await tokenChecking(actualToken, dispatch, navigate);
    setLoading(false);
  };
  checkToken();

  if (loading) {
    return <div className="loading_userPage">Loading...</div>;
  }

  return (
    <>
      <main className={`main bg-dark ${isReadingTransaction ? "filler-void" : ""}`}>
      {isReadingTransaction ? null : <WelcomeUser checkToken={checkToken}/>}
      <Account />
        {isReadingTransaction ? <TransactionReading /> : null}
      </main>
    </>
  );
}

export default UserPage;
