import React from "react";
import styles from "./styles.module.css";
import { Header, Menu } from "../../../common/components";

export const StatMisc = () => {
  return (
    <div className={styles["stat-misc-container"]}>
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
          <div className="flex-1 flex flex-col mx-[40px] py-3 gap-4">
            <div className="flex">
              <div className="flex flex-col flex-1 gap-1">
                <p className="ml-[200px] text-red-600 text-sm font-bold">
                  Attack won
                </p>
                {[
                  10, 25, 33, 42, 51, 60, 71, 80, 91, 102, 114, 120, 160, 200,
                  300, 400, 550, 551, 552, 552, 567, 568, 569, 600, 604,
                ].map((i, id) => {
                  return (
                    <div className="flex" key={id}>
                      <p className="w-[200px] text-secondary text-sm">
                        <span className="text-white">{id + 1}. </span>
                        Player
                        {id}
                      </p>
                      <p className="text-white text-sm">{835 - i}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <p className="ml-[200px] text-red-600 text-sm font-bold">
                  Attack defended
                </p>
                {[
                  10, 25, 33, 42, 51, 60, 71, 80, 91, 102, 114, 120, 160, 200,
                  300, 400, 550, 551, 552, 552, 567, 568, 569, 600, 604,
                ].map((i, id) => {
                  return (
                    <div className="flex" key={id}>
                      <p className="w-[200px] text-secondary text-sm">
                        <span className="text-white">{id + 1}. </span>
                        Player
                        {id}
                      </p>
                      <p className="text-white text-sm">{835 - i}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1 gap-1">
                <p className="ml-[200px] text-red-600 text-sm font-bold">
                  Power
                </p>
                {[
                  10, 25, 33, 42, 51, 60, 71, 80, 91, 102, 114, 120, 160, 200,
                  300, 400, 550, 551, 552, 552, 567, 568, 569, 600, 604,
                ].map((i, id) => {
                  return (
                    <div className="flex" key={id}>
                      <p className="w-[200px] text-secondary text-sm">
                        <span className="text-white">{id + 1}. </span>
                        Player
                        {id}
                      </p>
                      <p className="text-white text-sm">{835 - i}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <p className="ml-[200px] text-red-600 text-sm font-bold">
                  Level
                </p>
                {[
                  10, 25, 33, 42, 51, 60, 71, 80, 91, 102, 114, 120, 160, 200,
                  300, 400, 550, 551, 552, 552, 567, 568, 569, 600, 604,
                ].map((i, id) => {
                  return (
                    <div className="flex" key={id}>
                      <p className="w-[200px] text-secondary text-sm">
                        <span className="text-white">{id + 1}. </span>
                        Player
                        {id}
                      </p>
                      <p className="text-white text-sm">{835 - i}</p>
                    </div>
                  );
                })}
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
