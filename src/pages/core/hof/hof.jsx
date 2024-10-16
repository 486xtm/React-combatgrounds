import React from "react";
import styles from "./styles.module.css";
import { Header, Menu } from "../../../common/components";

export const HallOfFame = () => {
  return (
    <div className={styles["hof-container"]}>
      <Header currentActiveTab="rankings" />
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
          <div className="flex flex-col flex-1">
            <img
              src="/pics/halloffame.gif"
              alt="halloffame.gif"
              className="mx-3"
            />
            <table className={styles["custom-table"]}>
              <tbody>
                <tr>
                  <td colSpan={3}>Combat Ground Legend</td>
                </tr>
                <tr>
                  <td>Rank</td>
                  <td> Name</td>
                  <td>Points</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Shark</td>
                  <td>1902</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>DOCK</td>
                  <td>1723</td>
                </tr>
              </tbody>
            </table>

            <table className={styles["custom-table"]}>
              <tbody>
                <tr>
                  <td colSpan={2}>All-Time Hightes Networth</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Net Worth</td>
                </tr>
                <tr>
                  <td>Shark</td>
                  <td>1243</td>
                </tr>

                <tr>
                  <td>DOCK</td>
                  <td>1723</td>
                </tr>
              </tbody>
            </table>
            <table className={styles["custom-table"]}>
              <tbody>
                <tr>
                  <td colSpan={2}>All-Time Highest Crew Networth</td>
                </tr>
                <tr>
                  <td> Name</td>
                  <td>Net Worth</td>
                </tr>
                <tr>
                  <td>Shark</td>
                  <td>1902</td>
                </tr>

                <tr>
                  <td>DOCK</td>
                  <td>1723</td>
                </tr>
              </tbody>
            </table>

            <p className="text-secondary text-xl text-center font-bold mt-5">
              Results for Round 217
            </p>
            <p className="text-secondary text-center text-sm font-bold mb=5">
              (From 10/2/24 to 10/11/24)
            </p>

            <table className={styles["custom-table"]}>
              <tbody>
                <tr>
                  <td colSpan={4}>Top players</td>
                </tr>
                <tr>
                  <td>Rank</td>
                  <td> Name</td>
                  <td>Net Worth</td>
                  <td>Nedals</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Shark</td>
                  <td>1902</td>
                  <td>Gold</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Seal</td>
                  <td>1902</td>
                  <td>Gold</td>
                </tr>
              </tbody>
            </table>

            <table className={styles["custom-table"]}>
              <tbody>
                <tr>
                  <td colSpan={4}>Top Supporters</td>
                </tr>
                <tr>
                  <td>Rank</td>
                  <td> Name</td>
                  <td>Net Worth</td>
                  <td>Prize</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Shark</td>
                  <td>1902</td>
                  <td>Gold</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Seal</td>
                  <td>1902</td>
                  <td>Gold</td>
                </tr>
              </tbody>
            </table>

            <table className={styles["custom-table"]}>
              <tbody>
                <tr>
                  <td colSpan={4}>Top Free players</td>
                </tr>
                <tr>
                  <td>Rank</td>
                  <td> Name</td>
                  <td>Net Worth</td>
                  <td>Prize</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Shark</td>
                  <td>1902</td>
                  <td>Gold</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Seal</td>
                  <td>1902</td>
                  <td>Gold</td>
                </tr>
              </tbody>
            </table>

            <table className={styles["custom-table"]}>
              <tbody>
                <tr>
                  <td colSpan={5}>Top Crews</td>
                </tr>
                <tr>
                  <td>Rank</td>
                  <td> Name</td>
                  <td className="w-[200px]">Net Worth</td>
                  <td>Nedals</td>
                  <td>Prize</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Shark</td>
                  <td>1902</td>
                  <td>Gold</td>
                  <td>Gold</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Seal</td>
                  <td>1902</td>
                  <td>Gold</td>
                  <td>Gold</td>
                </tr>
              </tbody>
            </table>
            <div className="flex w-full justify-center gap-20 my-5">
              <p className="text-sm text-secondary">Go to Round:</p>
              <input className="w-[50px]" />
              <div className="text-red-500 font-bold px-1 btn bg-gray-100">
                Go!
              </div>
            </div>
            <p className="text-center text-secondary text-sm font-bold">
              Round
            </p>
            <p className="text-white text-xs text-center py-2 mb-3">
              &lt;&lt; <u>717</u> <u>718</u> <u>719</u>{" "}
              <u className="text-secondary text-bold">720</u> &gt;&gt;
            </p>
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
