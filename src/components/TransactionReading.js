import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import tokenChecking from "../helpers/tokenInfoRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function TransactionReading() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actualToken = useSelector((state) => state.loggedUserToken);
  
  const checkToken = async () => {
    await tokenChecking(actualToken, dispatch, navigate);
  };

  const handleViewDetailsClick = () => {
    /* Unthread the collapser + ... */
    checkToken();
  };


  return (
    <article className="transaction_reading-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-row">
            <td>01/01/2023</td>
            <td>
              <span>Payment received</span>
            </td>
            <td>$100</td>
            <td>$500</td>
            <td>
              <span onClick={handleViewDetailsClick} className="collapser">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </td>
          </tr>
          <tr class="table-row">
            <td>02/01/2023</td>
            <td>
              <span>Invoice #123</span>
            </td>
            <td>$200</td>
            <td>$300</td>
            <td>
              <span onClick={handleViewDetailsClick} className="collapser">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </td>
          </tr>
          <tr class="table-row">
            <td>02/01/2023</td>
            <td>
              <span>Invoice #456</span>
            </td>
            <td>$200</td>
            <td>$300</td>
            <td>
              <span onClick={handleViewDetailsClick} className="collapser">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </td>
          </tr>
          <tr class="table-row">
            <td>02/01/2023</td>
            <td>
              <span>Invoice #789</span>
            </td>
            <td>$200</td>
            <td>$300</td>
            <td>
              <span onClick={handleViewDetailsClick} className="collapser">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default TransactionReading;