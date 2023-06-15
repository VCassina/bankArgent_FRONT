import React from "react";
import "../styles/main.css";

function InputWrapper(props) {
  const { category, type, title, value, onChange } = props;

  return (
    <div className="input-wrapper">
      <label htmlFor={category}>{title}</label>
      <input id={category} type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default InputWrapper;
