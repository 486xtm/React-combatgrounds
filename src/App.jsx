import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(({auth}) => auth.isAuthenticated);
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route
          exact
          path="/secret"
          element={
            <ProtectedRoute>
              <SignUp />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
