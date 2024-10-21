import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import SignIn from "./pages/auth/SignInPage/SignIn";
import SignUp from "./pages/auth/SignUpPage/SignUp";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ChooseHelper } from "./pages/core/choosehelper/choosehelper";
import {
  EditInfo,
  HallOfFame,
  HeadQuarter,
  NukeCountry,
  Profile,
  Rankings,
  StatMisc,
} from "./pages/core";
import { MailCenter } from "./pages/core/mailcenter/mailcenter";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
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
        <Route exact path="/choosehelper" element={<ChooseHelper />} />
        <Route exact path="/headquarter" element={<HeadQuarter />} />
        <Route exact path="/hof" element={<HallOfFame />} />
        <Route exact path="/ranking" element={<Rankings />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/editinfo" element={<EditInfo />} />
        <Route exact path="/statmisc" element={<StatMisc />} />
        <Route exact path="/nukecountry" element={<NukeCountry />} />
        <Route exact path="/mailcenter" element={<MailCenter />} />
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
