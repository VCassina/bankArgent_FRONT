import React from "react";
import "../styles/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

library.add(faArrowRightFromBracket);

function userIcone() {
  return <i className="fa-solid fa-right-from-bracket"></i>;
}

export default userIcone;
