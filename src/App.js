import React, { useEffect } from "react";
import "./styles/main.css";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Helmet } from 'react-helmet';
import tokenChecking from "./helpers/tokenChecking";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const loggedUserToken = useSelector((state) => state.loggedUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    // Checking function declaration based with the helper.
    const checkToken = async () => {
      await tokenChecking(loggedUserToken, dispatch);
    };
    let intervalId = null;
    // If the token isn't empty : A first check + We'll check it each minutes.
    // If the token is empty, we let the intervalId as a null, no more check-up.
    if (loggedUserToken) {
      checkToken();
      intervalId = setInterval(() => {
        console.log("Token checking is processing...");
        checkToken();
      }, 60000); // 1 minute.
    }
    return () => {
      clearInterval(intervalId);
    };
    // When loggedUserToken will be updated, it will looking for a full or an empty string again.
  }, [loggedUserToken, dispatch]);

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
