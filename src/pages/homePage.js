import React, { Fragment } from "react";
import "../styles/main.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
