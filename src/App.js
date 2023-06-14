import React, { Fragment } from "react";
import "./styles/main.css";
import Routes from "./Routes";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>ArgentBank - Votre banque en ligne</title>
      </Helmet>
      <Routes />
    </>
  );
}

export default App;