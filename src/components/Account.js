import React from "react";
import "../styles/main.css";
import GreenButton from "../items/greenButton";
import { useDispatch } from "react-redux";
import { setScriptStatusIsReadingTransaction } from "../store";

function Account() {
  const dispatch = useDispatch();

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (xCOMING_SOON)</h3>
        <p className="account-amount">$COMING_SOON</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <GreenButton
          className="transaction-button"
          onClick={() => dispatch(setScriptStatusIsReadingTransaction(true))}
          content="View transaction"
        />
      </div>
    </section>
  );
}

export default Account;
