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

import NotFound from "./pages/NotFound";
import { getUserInfo } from "./api/user";
import { useToast } from "./ToastProvider";
import { setToast } from "./redux/toastSlice";
import { signOut } from "./api/auth";
import {
  socket,
  setupSocketListeners,
  cleanupSocketListeners,
} from "./socket/socket";
import { routes } from "./common/route";
import New from "./pages/auth/New/New";
import AdminLayout from "./common/components/admin_layout";

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

  useEffect(() => {
    setupSocketListeners(); // Set up socket listeners

    return () => {
      cleanupSocketListeners(); // Clean up socket listeners
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

  useEffect(() => {
    // Request permission on component mount
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            } else {
                console.log('Notification permission denied.');
            }
        });
    }
}, []);
  
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

export default App;
