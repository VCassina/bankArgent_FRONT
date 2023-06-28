import React from "react";
import "../styles/main.css";
import GreenButton from "../items/greenButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Account({
  id,
  solde,
  isReadingTransaction,
  setIsReadingTransaction,
  setOpenedAccountId,
}) {
  const formatedSolde = solde.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleClick = () => {
    setIsReadingTransaction(!isReadingTransaction);
    setOpenedAccountId(id);
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x{id})</h3>
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
              setOpenedAccountId(null);
            }}
          />
        ) : (
          <GreenButton
            className="transaction-button"
            onClick={handleClick}
            content="View transaction"
          />
        )}
      </div>
    </section>
  );
}

export default Account;
