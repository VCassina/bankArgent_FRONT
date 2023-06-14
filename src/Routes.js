import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.js";
import SignIn from './pages/signIn.js'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate to ="/" />} />
    </Routes>
  );
};

export default AppRoutes;