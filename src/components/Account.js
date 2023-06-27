import React from "react";
import "../styles/main.css";
import GreenButton from "../items/greenButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Account({ isReadingTransaction, setIsReadingTransaction }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (xCOMING_SOON)</h3>
        <p className="account-amount">$COMING_SOON</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        {isReadingTransaction ? (
          <FontAwesomeIcon
            icon={faTimes}
            className="cross-icon"
            onClick={() => {
              setIsReadingTransaction(!isReadingTransaction);
            }}
          />
        ) : (
          <GreenButton
            className="transaction-button"
            onClick={() => {
              setIsReadingTransaction(!isReadingTransaction);
            }}
            content="View transaction"
          />
        )}
      </div>
    </section>
  );
}

export default Account;
