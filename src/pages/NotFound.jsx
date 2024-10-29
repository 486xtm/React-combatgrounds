import React from "react";
import { Layout } from "../common/components";
const NotFound = () => {
  return (
    <Layout>
      <div className="text-[#FFFF00] text-[1.3rem] text-center flex-1 mt-[80px]">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </Layout>
  );
};
export default NotFound;
