import React from "react";
import "./styles/main.css";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>ArgentBank - Your online bank</title>
      </Helmet>
      <Header />
      <Routes />
      <Footer />
    </HelmetProvider>
  );
}

export default App;
