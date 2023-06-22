import React from "react";
import "../styles/main.css";
import GreenButton from "../items/greenButton";

function Account() {
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
          onClick={null}
          disabled={true}
          content="View transaction"
        />
      </div>
    </section>
  );
}

export default Account;
