import React from "react";
import styles from "./styles.module.css";
import { Header, Menu } from "../../../common/components";

export const Profile = () => {
  return (
    <div className={styles["profile-container"]}>
      <Header currentActiveTab="hall-of-fame" />
      <div className="flex flex-col w-[870px] border-primary border-2 bg-black">
        <div className={styles["status-bar"]}>
          <div className="flex flex-col">
            <div className="flex pt-1">
              <span className="text-black text-sm pl-[160px] font-bold w-[460px]">
                SeaLife24111
              </span>
              <span className="text-secondary text-sm pl-3 font-bold">
                2,083
              </span>
            </div>
            <div className="flex pt-1">
              <span className="text-secondary text-sm pl-[200px] font-bold w-[460px]">
                35,471
              </span>
              <span className="text-secondary text-sm pl-3 font-bold">
                452,319
              </span>
            </div>
            <div className="flex pt-1">
              <span className="text-secondary text-sm pl-[472px] font-bold">
                $552,452,319
              </span>
            </div>
            <div className="flex pt-1">
              <div className="black text-sm ml-[90px] font-bold w-[200px] h-5 border-2 border-gray">
                <div className="bg-gray-100 text-center text-gray-500 w-[30%] h-full">
                  30%
                </div>
              </div>
              <span className="text-secondary text-sm pl-[182px] font-bold">
                25
              </span>
            </div>
          </div>
          <div className="text-xxl font-bold text-secondary ml-[160px] mt-[50px]">
            25
          </div>
        </div>
        <div className="flex">
          <div className={styles["buy-turns"]} />
          <div className={styles["subscribe"]} />
        </div>
        <div className="flex min-h-[625px] w-full bg-black pb-[20px]">
          <Menu />
          <div className="flex-1">
            <img src="/pics/user.gif" alt="user.gif" className="block" />
            <div className="mx-3 border-2 border-primary flex flex-col">
              <div className="flex flex-col py-4 px-3 py-4">
                <div className="flex justify-between">
                  <p className="text-sm text-secondary text-bold">
                    Sealife42111
                  </p>
                  <p className="text-sm text-red-300 text-bold">
                    Net worth: 444,269
                  </p>
                </div>
                <img
                  src="/images/onlineimg.gif"
                  alt="online"
                  className="mx-auto"
                />
              </div>
              <div className="flex border-t-2 border-t-primary border-transparent">
                <div className="flex flex-col px-3 py-2 flex-1 border-r-2 border-r-primary border-transparent">
                  <table className={styles["custom-table"]}>
                    <tbody>
                      <tr>
                        <td colSpan={2} className="text-center">
                          PLAYER INFO
                        </td>
                      </tr>
                      <tr>
                        <td>Class</td>
                        <td>Solider</td>
                      </tr>
                      <tr>
                        <td>Grade</td>
                        <td>None</td>
                      </tr>
                      <tr>
                        <td>Lavel</td>
                        <td>151</td>
                      </tr>
                      <tr>
                        <td>Total Recruits</td>
                        <td>36,405</td>
                      </tr>
                      <tr>
                        <td>Directly Recruits Today</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <img
                      src="/images/winsmastery.jpg"
                      alt="a"
                      className="my-5"
                    />
                    <img
                      src="/images/clicksmastery.jpg"
                      alt="b"
                      className="my-5"
                    />
                    <img
                      src="/images/levelmastery.jpg"
                      alt="c"
                      className="my-5"
                    />
                    <img
                      src="/images/defensemastery.jpg"
                      alt="d"
                      className="my-5"
                    />
                  </div>

                  <div className="my-1 bg-dark-primary text-sm font-bold text-white text-bold text-center mt-3">
                    MEDALS
                  </div>
                </div>
                <div className="flex flex-col px-3 py-2 flex-1">
                  <div className="my-1 bg-dark-primary text-sm font-bold text-white text-bold text-center">
                    DESCRIPTION
                  </div>
                  <div className="my-1 bg-dark-primary text-sm font-bold text-white text-bold text-center">
                    PLAYER'S ATATAR
                  </div>
                  <div>
                    <img
                      src="/pics/avatar.gif"
                      alt="avatar"
                      className="mx-auto"
                    />
                  </div>
                  <div className="my-1 bg-dark-primary text-sm font-bold text-white text-bold text-center">
                    MONEY
                  </div>
                  <p className="text-center text-white font-bold text-sm">
                    MONEY available:
                  </p>
                  <p className="text-center text-green-600 font-bold">
                    $428,242,356
                  </p>
                  <p className="text-center text-white font-bold text-sm mt-3">
                    MONEY banked:
                  </p>
                  <p className="text-center text-red-400 font-bold">$0</p>
                  <div className="my-1 bg-dark-primary text-sm font-bold text-white text-bold text-center mt-3">
                    CREW
                  </div>
                  <p className="text-left text-white font-bold text-sm">
                    sealife22312 is not in a crew at the moment
                  </p>
                  <div className="my-1 bg-dark-primary text-sm font-bold text-white text-bold text-center mt-3">
                    SUPPLIES
                  </div>
                  <div className="flex">
                    <div className="flex flex-col w-[70px]">
                      <p className="text-red-800 text-xs font-bold border-gray-900 border-2">
                        Attack items
                      </p>
                      <img
                        src="/images/items/3.gif"
                        alt="3"
                        className={styles["item"]}
                      />
                      <img
                        src="/images/items/5.gif"
                        alt="5"
                        className={styles["item"]}
                      />
                      <img
                        src="/images/items/8.gif"
                        alt="8"
                        className={styles["item"]}
                      />
                    </div>
                    <div className="flex flex-col w-[70px]">
                      <p className="text-blue-800 text-xs font-bold border-gray-900 border-2">
                        Defense items
                      </p>
                      <img
                        src="/images/items/1.gif"
                        alt="1"
                        className={styles["item"]}
                      />
                      <img
                        src="/images/items/6.gif"
                        alt="6"
                        className={styles["item"]}
                      />
                      <img
                        src="/images/items/2.gif"
                        alt="2"
                        className={styles["item"]}
                      />
                      <img
                        src="/images/items/18.gif"
                        alt="18"
                        className={styles["item"]}
                      />
                    </div>
                    <div className="flex flex-col w-[70px]">
                      <p className="text-white text-xs font-bold border-gray-900 border-2">
                        Combo items
                      </p>
                      <img
                        src="/images/items/4.gif"
                        alt="4"
                        className={styles["item"]}
                      />
                      <img
                        src="/images/items/15.gif"
                        alt="5"
                        className={styles["item"]}
                      />
                    </div>
                    <div className="flex flex-col w-[70px]">
                      <p className="text-green-500 text-xs font-bold border-gray-900 border-2">
                        Income items
                      </p>
                      <img
                        src="/images/items/12.gif"
                        alt="12"
                        className={styles["item"]}
                      />
                      <img
                        src="/images/items/13.gif"
                        alt="13"
                        className={styles["item"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
