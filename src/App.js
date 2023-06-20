import React, { Fragment } from "react";
import "./styles/main.css";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Helmet } from 'react-helmet';
import store from "./store";

// This globalState section will be removed.
console.log(store.getState().isLoggedUser);

function App() {
  return (
    <>
      <Helmet>
        <title>ArgentBank - Your online bank</title>
      </Helmet>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;