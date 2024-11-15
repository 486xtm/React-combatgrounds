import React from "react";
import LeftSidebar from "./left-sidebar";
import Breadcrumbs from "./breadcrumbs";

const AdminLayout = ({ children }) => {
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
