import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.js";
import SignInPage from './pages/signInPage.js';
import UserPage from './pages/userPage.js';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="*" element={<Navigate to ="/" />} />
    </Routes>
  );
};

export default AppRoutes;