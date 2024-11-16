import { useEffect } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import io from "socket.io-client";

import NotFound from "./pages/NotFound";

import { getUserInfo } from "./api/user";
import { useToast } from "./ToastProvider";
import { setToast } from "./redux/toastSlice";
import { setOnlinePlayers } from "./redux/onlineSlice";
import { signOut } from "./api/auth";
import { socketURL } from "./common/constant";
import { setUnreadMessagesCount } from "./redux/mailSlice";
import { routes } from "./common/route";
import New from "./pages/auth/New/New";
import AdminLayout from "./common/components/admin_layout";
import {
  setPendingInviteList,
  setUnreadCrewChatCount,
} from "./redux/crewSlice";
import { handleBossAttack } from "./redux/userSlice";
export const socket = io(socketURL);

const ProtectedRoute = React.memo(({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const expirationDate = localStorage.getItem("EXPIRATION_DATE");
    const currentDate = new Date().getTime();

    if (currentDate > expirationDate) {
      signOut(dispatch, navigate, socket);
    }

    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      getUserInfo(dispatch, navigate);
    }
  }, [dispatch, navigate]);

  const token = localStorage.getItem("ACCESS_TOKEN");
  if (!isAuthenticated && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return isAuthenticated && token ? children : null;
});

const App = () => {
  const toast = useSelector(({ toast }) => toast);
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);
  const { showError, showSuccess, showInfo } = useToast();
  const unreadMessagesCount = useSelector(({ mail }) => mail.unread);
  const pendingInviteList = useSelector(({ crew }) => crew.pendingInviteList);
  const unreadCrewChatCount = useSelector(
    ({ crew }) => crew.unreadCrewChatCount
  );

  useEffect(() => {
    socket.on("onlinePlayer", (userList) => {
      dispatch(setOnlinePlayers(Object.values(userList)));
    });
    socket.on("receive message", (data) => {
      dispatch(setUnreadMessagesCount((unreadMessagesCount || 0) + 1));
      dispatch(
        setToast({ type: "info", msg: `New message arrived from ${data.from}` })
      );
    });
    socket.on("_ambush", (data) => {
      dispatch(setToast({ type: "info", msg: data._msg }));
      if (data.ambushType === 1) {
        if (window.location.pathname === `/battlefield/${data.region_id}`) {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }
      if (data.ambushType === 2) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    });
    //
    socket.on("receive_invite", (data) => {
      dispatch(
        setToast({
          type: "info",
          msg: `You've got invited to ${data.from} as Rank${data.role}`,
        })
      );
      dispatch(setPendingInviteList((pendingInviteList || 0) + 1));
    });
    socket.on("receive_chat", () => {
      dispatch(setUnreadCrewChatCount((unreadCrewChatCount || 0) + 1));
    });
    socket.on("attack_boss", (data) => {
      const { rewards, msg } = data;
      dispatch(setToast({ type: "success", msg }));
      dispatch(handleBossAttack(rewards));
    });
    //
    return () => {
      socket.off("onlinePlayer");
      socket.off("receive message");
      socket.off("_ambush");
      socket.off("attack_boss");
      socket.off("receive_chat");
      socket.off("receive_invite");
    };
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      socket.emit("login", user);
    }
  }, [user]);

  useEffect(() => {
    if (toast && toast.msg) {
      switch (toast.type) {
        case "success":
          showSuccess(toast.msg);
          break;
        case "info":
          showInfo(toast.msg);
          break;
        default:
          showError(toast.msg);
      }
      dispatch(setToast({}));
    }
  }, [toast, dispatch, showSuccess, showError, showInfo]);

  return (
    <Router>
      <Routes>
        {routes.auth.map((route, id) => (
          <Route exact {...route} key={`auth_route_${id}`} />
        ))}
        {routes.main.map((route, id) => (
          <Route
            exact
            path={route.path}
            key={`main_route_${id}`}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}
          />
        ))}

        {routes.admin.map((route, id) => (
          <Route
            exact
            path={route.path}
            key={`admin_route_${id}`}
            element={
              <ProtectedRoute>
                <AdminLayout>{route.element}</AdminLayout>
              </ProtectedRoute>
            }
          />
        ))}
        <Route path="/new" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default React.memo(App);
