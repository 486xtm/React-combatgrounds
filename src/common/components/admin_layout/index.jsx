import React, { useEffect } from "react";
import LeftSidebar from "./left-sidebar";
import Breadcrumbs from "./breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant";
import { getUserInfo } from "../../../api/user";

const AdminLayout = ({ children }) => {
  const user = useSelector(({ user }) => user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (user?.role !== -1) {
    navigate(ROUTES.MAIN_ROUTES.HEADQUARTER);
  }

  useEffect(() => {
    getUserInfo(dispatch, navigate);
  }, []);

  return (
    <div className="flex w-screen bg-custom-dark">
      <LeftSidebar />
      <main className="flex flex-col flex-1 w-full h-screen px-16 py-11 overflow-y-scroll scroll-custom bg-gradient-gray-linear rounded-tl-lg">
        <Breadcrumbs />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
