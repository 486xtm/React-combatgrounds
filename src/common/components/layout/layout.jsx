import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Menu } from "../menu/menu";
import { Header } from "../header/header";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../api/auth";

export const Layout = ({
  children,
  currentActiveTab,
  isHeaderFull = false,
  isMenuShow = true,
}) => {
  const user = useSelector(({ auth }) => auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    getUserInfo(dispatch);
  }, []);

  return (
    <div className={styles["layout-container"]}>
      {isHeaderFull && <img src="./images/index_r1_c1.jpg" width="880" />}
      <Header currentActiveTab={currentActiveTab} />
      <div className="flex flex-col w-[870px] border-primary border-2 bg-black">
        {isMenuShow && (
          <>
            <div className={styles["status-bar"]}>
              <div className="flex flex-col w-[680px]">
                <div className="flex pt-1">
                  <span className="text-black text-sm pl-[160px] font-bold w-[460px]">
                    {user && user.name}
                  </span>
                  <span className="text-secondary text-sm pl-3 font-bold">
                    {user && user.turn}
                  </span>
                </div>
                <div className="flex pt-1">
                  <span className="text-secondary text-sm pl-[200px] font-bold w-[460px]">
                    {user && user.recruits ? user.recruits : 0}
                  </span>
                  <span className="text-secondary text-sm pl-3 font-bold">
                    {user && user.netWorth ? user.netWorth : 0}
                  </span>
                </div>
                <div className="flex pt-1">
                  <span className="text-secondary text-sm pl-[472px] font-bold">
                    ${user && user.money ? user.money : 0}
                  </span>
                </div>
                <div className="flex pt-1">
                  <div className="black text-sm ml-[90px] font-bold w-[200px] h-5 border-2 border-gray">
                    <div className="bg-gray-100 text-center text-gray-500 w-[85%] h-full">
                      85%
                    </div>
                  </div>
                  <span className="text-secondary text-sm pl-[182px] font-bold">
                    {user && user.level ? user.level : 1}
                  </span>
                </div>
              </div>
              <div className="text-xxl font-bold text-secondary mt-[50px] w-[125px] text-center">
                {user && user.rank ? user.rank : 325}
              </div>
            </div>
            <div className="flex">
              <div className={styles["buy-turns"]} />
              <div className={styles["subscribe"]} />
            </div>
          </>
        )}
        <div className="flex min-h-[625px] w-full bg-black pb-[20px]">
          {isMenuShow && <Menu />}
          {children}
        </div>
      </div>
      <p className="font-bold text-xs text-black mt-4">
        Copyright © 2005-2006 CombatGrounds.com. All rights reserved.
      </p>
      <p className="font-bold text-xs text-black mb-5 underline cursor-pointer">
        Contact us
      </p>
    </div>
  );
};
