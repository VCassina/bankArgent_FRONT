import React, { Fragment } from "react";
import "./styles/main.css";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Helmet } from 'react-helmet';

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