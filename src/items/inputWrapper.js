import React from "react";
import "../styles/main.css";

function InputWrapper(props) {
  const { category, type, title, value, onChange, placeholder, isDisabled } =
    props;

  return (
    <div className="input-wrapper">
      <label htmlFor={category}>{title}</label>
      <input
        id={category}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled ? "disabled" : ""}
      />
    </div>
  );
}

export default InputWrapper;
