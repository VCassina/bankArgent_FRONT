import React from "react";
import "../styles/main.css";
import TransactionButton from "../items/transactionButton";

function Account() {
  return (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (xCOMING_SOON)</h3>
            <p className="account-amount">$COMING_SOON</p>
            <p className="account-amount-description">Available Balance</p>
        </div>
        <TransactionButton />
    </section>
  );
}

export default Account;
