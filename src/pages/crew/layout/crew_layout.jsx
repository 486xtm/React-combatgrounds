import React, { useState, useEffect } from "react";
import styles from "./crewStye.module.css";
import { Layout } from "../../../common/components";
export const CrewLayout = ({ children, title = "Invites" }) => {
  return (
    <Layout>
      <div className="flex-1 text-white relative mx-5 mt-[70px] h-[420px]">
        <img className="absolute w-[50%]" src="/crew/title.svg" alt="title.svg" />
        <img className="absolute" src="/crew/background.svg" alt="background.svg" />
        <img
          className="absolute bottom-0 right-0 w-[41%]"
          src="/crew/footer.svg"
          alt="footer.svg"
        />
        <div className="absolute w-full px-2 h-[420px]">
          <div className="text-[#FFF] font-bold text-xl mb-6">{title}</div>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default CrewLayout;
