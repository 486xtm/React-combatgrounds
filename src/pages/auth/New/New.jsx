import React from "react";
import styles from "./style.module.css";
const New = () => {
  return (
    <div className={styles["sign_container"]}>
      <img className="w-[30%] mx-auto pt-20 mb-20" src="/SignIn/mark.svg" />
      <div className="flex flex-col rounded-[24px] w-[30%] h-[50vh] bg-[rgba(255,255,255,0.1)] mx-auto text-center p-[50px]">
        <div className="font-[900] text-[48px] text-white">LOGIN</div>
      </div>
    </div>
  );
};

export default New;
