import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Menu } from "../menu/menu";
import { Header } from "../header/header";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../api/user";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant";
export const Layout = ({
  children,
  currentActiveTab = "headquarters",
  isHeaderFull = false,
  isMenuShow = true,
}) => {
  const user = useSelector(({ user }) => user.user);
  const navigate = useNavigate();
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
                    {user && user.turn.toLocaleString('en-US')}
                  </span>
                </div>
                <div className="flex pt-1">
                  <span className="text-secondary text-sm pl-[200px] font-bold w-[460px]">
                    {user && user.recruits ? user.recruits.toLocaleString('en-US') : 0}
                  </span>
                  <span className="text-secondary text-sm pl-3 font-bold">
                    {user && user.netWorth ? user.netWorth.toLocaleString('en-US') : 0}
                  </span>
                </div>
                <div className="flex pt-1">
                  <span className="text-secondary text-sm pl-[472px] font-bold">
                    ${user && user.money ? user.money.toLocaleString('en-US') : 0}
                  </span>
                </div>
                <div className="flex pt-1">
                  <div className="black text-sm ml-[90px] font-bold w-[200px] h-5 border-2 border-gray">
                    <div className="bg-gray-100 text-center text-gray-500 w-[85%] h-full">
                      85%
                    </div>
                  </div>
                  <span className="text-secondary text-sm pl-[182px] font-bold">
                    {user && user.level ? user.level.toLocaleString('en-US') : 1}
                  </span>
                </div>
              </div>
              <div className="text-xxl font-bold text-secondary mt-[50px] w-[125px] text-center">
                {user && user.rank ? user.rank.toLocaleString('en-US') : 325}
              </div>
            </div>
            <div className="flex">
              <div className={styles["buy-turns"]} onClick={() => navigate(ROUTES.MAIN_ROUTES.BUY_TURNS)} />
              <div className={styles["subscribe"]} onClick={() => navigate(ROUTES.MAIN_ROUTES.SUBSCRIBE)} />
            </div>
          </>
        )}
        <div className="flex min-h-[625px] w-full bg-black pb-[20px]">
          {isMenuShow && <Menu />}
          {children}
        </div>
      </div>
      <p className="font-bold text-xs text-black mt-4">
        Copyright © 2024-2025 CombatGrounds.com. All rights reserved.
      </p>
      <p className="font-bold text-xs text-black mb-5 underline cursor-pointer">
        Contact us
      </p>
    </div>
  );
};
