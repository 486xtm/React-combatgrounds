import React from "react";
import LeftSidebar from "./left-sidebar";
import Breadcrumbs from "./breadcrumbs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant";

const AdminLayout = ({ children }) => {
  const user = useSelector(({ user }) => user.user);

  const navigate = useNavigate();

  if (user.role !== -1) {
    navigate(ROUTES.MAIN_ROUTES.HEADQUARTER);
  }

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
