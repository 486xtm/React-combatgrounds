import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignInPage/SignIn";
import SignUp from "./pages/auth/SignUpPage/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ChooseHelper } from "./pages/core/choosehelper/choosehelper";
import {
  AttackLog,
  EditInfo,
  HallOfFame,
  HeadQuarter,
  NukeCountry,
  Profile,
  Rankings,
  StatMisc,
  MailCenter,
  FAQ,
  BattleField,
  Recruit,
  RaiseFund,
  HomeLeave,
  Training,
  UserGuide,
  BattleFieldMap,
  BattleFieldRegion,
  Shop,
} from "./pages/core";
import { getUserInfo } from "./api/user";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const AuthRoute = ({ children }) => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  let location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/headquarter" state={{ from: location }} replace />;
  }
  return children;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUserInfo(dispatch);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AuthRoute>
              <SignIn />
            </AuthRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <AuthRoute>
              <SignIn />
            </AuthRoute>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          }
        />
        <Route
          exact
          path="/choosehelper"
          element={
            <ProtectedRoute>
              <ChooseHelper />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/headquarter"
          element={
            <ProtectedRoute>
              <HeadQuarter />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/hof"
          element={
            <ProtectedRoute>
              <HallOfFame />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/ranking"
          element={
            <ProtectedRoute>
              <Rankings />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/editinfo"
          element={
            <ProtectedRoute>
              <EditInfo />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/statmisc"
          element={
            <ProtectedRoute>
              <StatMisc />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/nukecountry"
          element={
            <ProtectedRoute>
              <NukeCountry />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/mailcenter"
          element={
            <ProtectedRoute>
              <MailCenter />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/attacklog"
          element={
            <ProtectedRoute>
              <AttackLog />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/faq"
          element={
            <ProtectedRoute>
              <FAQ />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/territories"
          element={
            <ProtectedRoute>
              <BattleField />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/recruit"
          element={
            <ProtectedRoute>
              <Recruit />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/raisefunds"
          element={
            <ProtectedRoute>
              <RaiseFund />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/bootcamp"
          element={
            <ProtectedRoute>
              <Training />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/homelve"
          element={
            <ProtectedRoute>
              <HomeLeave />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/userguide"
          element={
            <ProtectedRoute>
              <UserGuide />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/map"
          element={
            <ProtectedRoute>
              <BattleFieldMap />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/battlefield/:region"
          element={
            <ProtectedRoute>
              <BattleFieldRegion />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/userguide"
          element={
            <ProtectedRoute>
              <UserGuide />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
