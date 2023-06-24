import React from "react";
import "../styles/main.css";
import GreenButton from "../items/greenButton";
import { useDispatch, useSelector } from "react-redux";
import { setScriptStatusIsReadingTransaction } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Account() {
  const dispatch = useDispatch();
  const scriptStatusIsReadingTransaction = useSelector(
    (state) => state.scriptStatusIsReadingTransaction
  );

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (xCOMING_SOON)</h3>
        <p className="account-amount">$COMING_SOON</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        {scriptStatusIsReadingTransaction ? (
          <FontAwesomeIcon icon={faTimes} className="cross-icon" onClick={() =>
            dispatch(setScriptStatusIsReadingTransaction(false))
          } />
        ) : (
          <GreenButton
            className="transaction-button"
            onClick={() =>
              dispatch(setScriptStatusIsReadingTransaction(true))
            }
            content="View transaction"
          />
        )}
      </div>
    </section>
  );
}

export default Account;
