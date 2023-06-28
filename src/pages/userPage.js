import React, { useState } from "react";
import "../styles/main.css";
import WelcomeUser from "../components/WelcomeUser";
import Account from "../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransactionReading from "../components/TransactionReading";
import data from "../datas/accountStaticContent.json";
import tokenChecking from "../helpers/tokenInfoRequest";

function UserPage() {
  const accounts = data.account;
  const actualToken = useSelector((state) => state.loggedUserToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isReadingTransaction, setIsReadingTransaction] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [openedAccountId, setOpenedAccountId] = useState(null);

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
      <main
        className={`main bg-dark ${isReadingTransaction ? "filler-void" : ""}`}
      >
        {isReadingTransaction ? null : (
          <WelcomeUser isEditing={isEditing} setIsEditing={setIsEditing} />
        )}

        {openedAccountId ? (
          accounts
            .filter((account) => account.id === openedAccountId)
            .map((account) => (
              <Account
                key={account.id}
                id={account.id}
                solde={account.solde}
                isReadingTransaction={isReadingTransaction}
                setIsReadingTransaction={setIsReadingTransaction}
                setOpenedAccountId={setOpenedAccountId}
              />
            ))
        ) : (
          accounts.map((account) => (
            <Account
              key={account.id}
              id={account.id}
              solde={account.solde}
              isReadingTransaction={isReadingTransaction}
              setIsReadingTransaction={setIsReadingTransaction}
              setOpenedAccountId={setOpenedAccountId}
            />
          ))
        )}

        {isReadingTransaction ? <TransactionReading /> : null}
      </main>
    </>
  );
}

export default UserPage;
