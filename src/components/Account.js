import React from "react";
import "../styles/main.css";
import GreenButton from "../items/greenButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import data from "../datas/accountStaticContent.json";

function Account({ isReadingTransaction, setIsReadingTransaction }) {
  const dataAccount = data.account[0]
  const formatedSolde = dataAccount.solde.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x{dataAccount.id})</h3>
        <p className="account-amount">${formatedSolde}</p>
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
