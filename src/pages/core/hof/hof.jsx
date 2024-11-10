import React from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";

export const HallOfFame = () => {
  return (
    <Layout currentActiveTab={"hall-of-fame"}>
      <div className="flex flex-col flex-1">
        <img src="/pics/halloffame.gif" alt="halloffame.gif" className="mx-3" />
        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={3}>Combat Grounds Legends</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td> Name</td>
              <td>Points</td>
            </tr>
            <tr>
              <td>1</td>
              <td>007</td>
              <td>25</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Black Rose</td>
              <td>8</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Aegon</td>
              <td>5</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Peekaboo</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Rabbit</td>
              <td>3</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Stella</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>

        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={2}>All-Time Highest Net Worth</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Net Worth</td>
            </tr>
            <tr>
              <td>007</td>
              <td>71,787,670</td>
            </tr>
          </tbody>
        </table>

        <p className="text-secondary text-xl text-center font-bold mt-5">
          Results for Round 1
        </p>
        <p className="text-secondary text-center text-sm font-bold mb=5">
          (From 2/11/24 to 10/11/24)
        </p>

        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={4}>Top Players</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Net Worth</td>
              <td>Medals</td>
            </tr>
            <tr>
              <td>1</td>
              <td>007</td>
              <td>71,787,670</td>
              <td>Medal of Honor</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Black Rose</td>
              <td>52,324,512</td>
              <td>Bronze Star</td>
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
              <td>Name</td>
              <td>Net Worth</td>
              <td>Medals</td>
            </tr>
            <tr>
              <td>1</td>
              <td>007</td>
              <td>71,787,670</td>
              <td>Medal of Honor</td>
            </tr>
          </tbody>
        </table>

        {/* <table className={styles["custom-table"]}>
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
        </table> */}

        {/* <table className={styles["custom-table"]}>
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
        </table> */}

        {/* <table className={styles["custom-table"]}>
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
        </table> */}
        <div className="flex w-full justify-center gap-20 my-5">
          <p className="text-sm text-secondary">Go to Round:</p>
          <input className="w-[50px]" />
          <div className="text-[red] font-bold px-1 btn bg-gray-100">Go!</div>
        </div>
        <p className="text-center text-secondary text-sm font-bold">Round</p>
        <p className="text-white text-xs text-center py-2 mb-3">
          &lt;&lt; <u className="text-secondary text-bold">1</u>{" "}
          &gt;&gt;
        </p>
      </div>
    </Layout>
  );
};
