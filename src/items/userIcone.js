import React from "react";
import "../styles/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

library.add(faUserCircle);

function userIcone() {
    return (
        <i className="fa fa-user-circle"></i>
    );
}

export default userIcone;