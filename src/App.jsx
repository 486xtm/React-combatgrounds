import { useEffect, useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import SignIn from "./pages/auth/SignInPage/SignIn";
import SignUp from "./pages/auth/SignUpPage/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ChooseHelper } from "./pages/core/choosehelper/choosehelper";
import io from 'socket.io-client';
export const socket = io('http://localhost:5000');
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
  OnlinePlayers,
} from "./pages/core";
import NotFound from "./pages/NotFound";
import { getUserInfo } from "./api/user";
import { useToast } from "./ToastProvider";
import { setToast } from "./redux/toastSlice";
import { setOnlinePlayers } from "./redux/onlineSlice";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) getUserInfo(dispatch, navigate);
  }, []);
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (!isAuthenticated && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (isAuthenticated && token) return children;
};

const App = () => {
  const toast = useSelector(({ toast }) => toast);
  const dispatch = useDispatch();
  const user = useSelector(({user}) =>user.user);
  const { showError, showSuccess } = useToast();
  useEffect (() => {
    
    socket.on('onlinePlayer', (userList) => {
      dispatch(setOnlinePlayers(Object.values(userList)))
    });
    return () => {
      socket.off('onlinePlayer');
    }
  },[])
  useEffect(() => {
    if(user)
      socket.emit("login",user);
  }, [user])
  useEffect(() => {
    if (
      !toast ||
      !toast.msg ||
      typeof showSuccess !== "function" ||
      typeof showError !== "function"
    ) {
      return;
    }
    if (toast.type === "success") {
      showSuccess(toast.msg);
      dispatch(setToast({}));
    } else {
      showError(toast.msg);
      dispatch(setToast({}));
    }
    dispatch(setToast({}));
  }, [toast]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<SignUp />} />
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
        <Route exact path="/faq" element={<FAQ />} />
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
        <Route exact path="/userguide" element={<UserGuide />} />
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
        <Route path="*" element={<NotFound />} />
        <Route
          exact
          path="/online"
          element={
            <ProtectedRoute>
              <OnlinePlayers />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
