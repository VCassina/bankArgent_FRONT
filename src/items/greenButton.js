import React from "react";
import "../styles/main.css";

function GreenButton(props) {
  const { className, onClick, disabled, content } = props;

  const handleClick = (event) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button className={className} disabled={disabled} onClick={handleClick}>
      {content}
    </button>
  );
}

export default GreenButton;
