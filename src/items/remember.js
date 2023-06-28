import React from "react";
import "../styles/main.css";

function Remember() {
  return (
    <div className="input-remember">
      <input id="remember-me" type="checkbox"/>
      <label htmlFor="remember-me">Remember me</label>
    </div>
  );
}

export default Remember;
