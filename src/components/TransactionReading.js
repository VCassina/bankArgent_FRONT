import React, { useState } from "react";
import tokenChecking from "../helpers/tokenInfoRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransactionCollapser from "../items/transactionCollapser";
import data from "../datas/accountStaticContent.json";

function TransactionReading() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actualToken = useSelector((state) => state.loggedUserToken);
  const [isOpenCollapser, setIsOpenCollapser] = useState(
    data.transactions.map(() => false)
  );

  const checkToken = async () => {
    await tokenChecking(actualToken, dispatch, navigate);
  };

  const handleViewDetailsClick = (index) => {
    /* Unthread the collapser + ... */
    checkToken();
    const updatedCollapserState = [...isOpenCollapser];
    updatedCollapserState[index] = !updatedCollapserState[index];
    setIsOpenCollapser(updatedCollapserState);
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
          {data.transactions.map((data, index) => (
            <TransactionCollapser
              key={index}
              date={data.date}
              description={data.description}
              amount={data.amount}
              balance={data.balance}
              type={data.type}
              category={data.category}
              note={data.note}
              onClick={() => handleViewDetailsClick(index)}
              isOpen={isOpenCollapser[index]}
            />
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default TransactionReading;
