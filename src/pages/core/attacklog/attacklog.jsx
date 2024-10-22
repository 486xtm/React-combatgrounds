import React, { useState } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";

export const AttackLog = () => {
  const logs = [
    {
      type: "Attacker",
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      result: "lose",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Defencer",
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Oh, bad!",
    },
    {
      type: "Defencer",
      result: "lose",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Oh, bad!",
    },
    {
      type: "Defencer",
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Oh, bad!",
    },
    {
      type: "Defencer",
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Oh, bad!",
    },
    {
      type: "Defencer",
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Oh, bad!",
    },
  ];

  const [type, setType] = useState("Attacker");

  return (
    <Layout currentActiveTab={"headquarters"}>
      <div className="flex-1 flex flex-col">
        <p className="text-center font-bold text-xxl text-red-600 my-5">
          Attack log
        </p>
        <div className="flex justify-around mx-5 my-3 px-5">
          <p
            className="font-bold text-xl text-secondary cursor-pointer"
            onClick={() => setType("Attacker")}
          >
            [<u>Your attacks</u>]
          </p>
          <p
            className="font-bold text-xl text-secondary cursor-pointer"
            onClick={() => setType("Defencer")}
          >
            [<u>Attacks on you</u>]
          </p>
        </div>
        <div className="flex">
          <table className={styles["attack-log"]}>
            <thead>
              <tr>
                <th>{type}</th>
                <th>Result</th>
                <th>Damage Caused</th>
                <th>Recruits killed</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {logs
                .filter((log) => {
                  return log.type === type;
                })
                .map((l, id) => {
                  return (
                    <tr key={`attack_log_${id}`}>
                      <td>
                        {l.type}
                        {id}
                      </td>
                      <td>{l.result}</td>
                      <td>{l.damageCaused}</td>
                      <td>{l.recruitsKilled}</td>
                      <td>{l.note}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
