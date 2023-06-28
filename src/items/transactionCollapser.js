import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPencil } from "@fortawesome/free-solid-svg-icons";
import "../styles/transactionCollapser.css";

function TransactionCollapser({
  date,
  description,
  amount,
  balance,
  type,
  category,
  note,
  isOpen,
  onClick
}) {
  const collapserClassName = isOpen ? "collapser open" : "collapser";
  const [isCategoryEditVisible, setCategoryEditVisible] = useState(false);
  const [isNoteEditVisible, setNoteEditVisible] = useState(false);

  const handleCategoryEditClick = () => {
    setCategoryEditVisible(!isCategoryEditVisible);
  };

  const handleNoteEditClick = () => {
    setNoteEditVisible(!isNoteEditVisible);
  };

  return (
    <React.Fragment>
      <tr className="table-row underline_container">
        <td>{date}</td>
        <td>
          <span>{description}</span>
        </td>
        <td>${amount}</td>
        <td>${balance}</td>
        <td>
          <span onClick={onClick} className={collapserClassName}>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </td>
      </tr>
      <tr className={`table-row underline _1 ${isOpen ? "" : "hidden"}`}>
        <td>
          <span className="underline_item-left"> Transaction type</span>
        </td>
        <td>
          <span>{type}</span>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className={`table-row underline _2 ${isOpen ? "" : "hidden"}`}>
        <td>
          <span className="underline_item-left">Category</span>
        </td>
        <td className="underline_item-editLine">
          {isCategoryEditVisible ? (
            <input type="text" />
          ) : (
            <span>{category}</span>
          )} 
          <FontAwesomeIcon
            icon={faPencil}
            onClick={handleCategoryEditClick}
          />
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className={`table-row underline _3 ${isOpen ? "" : "hidden"}`}>
        <td>
          <span className="underline_item-left">Note</span>
        </td>
        <td className="underline_item-editLine">
          {isNoteEditVisible ? (
            <>
              <input type="text" />
              <FontAwesomeIcon icon={faPencil} onClick={handleNoteEditClick} />
            </>
          ) : (
            <>
              <span>{note}</span>
              <FontAwesomeIcon icon={faPencil} onClick={handleNoteEditClick} />
            </>
          )}
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </React.Fragment>
  );
}

export default TransactionCollapser;
