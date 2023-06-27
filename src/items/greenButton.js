import React from "react";
import "../styles/main.css";
import tokenChecking from "../helpers/tokenInfoRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function GreenButton({ className, onClick, disabled, content }) {
  const actualToken = useSelector((state) => state.loggedUserToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkToken = async () => {
    await tokenChecking(actualToken, dispatch, navigate);
  };

  const handleClick = (event) => {
    checkToken();
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
