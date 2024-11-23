import React from "react";
import styles from "./style.module.css";
const New = () => {
  return (
    <div className={styles["sign_container"]}>
      <div className="container mx-auto">
        <img className="w-[30%] mx-auto" src="/SignIn/mark.svg" />
        <div className="flex flex-col rounded-[24px] w-full lg:w-[30%] h-[50vh] bg-[rgba(255,255,255,0.1)] mx-auto text-center ">
          <div className="font-[900] text-[1rem] text-white">LOGIN</div>
        </div>
      </div>
    </div>
  );
};

export default New;

