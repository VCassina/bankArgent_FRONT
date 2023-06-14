import React from "react";
import "../styles/main.css";

function InputWrapper(props) {
    const { category, type, title } = props;

  return (
    <div className="input-wrapper">
      <label for={category}>{title}</label>
      <input id={category} type={type} />
    </div>
  );
}

export default InputWrapper;
