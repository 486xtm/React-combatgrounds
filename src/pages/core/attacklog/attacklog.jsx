import React, { useState } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";

export const AttackLog = () => {
  const logs = [
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },
    {
      type: "Attacker",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Wow!",
    },

    {
      type: "Defencer",
      player: {
        name: "sealife"
      },
      result: "won",
      damageCaused: "320",
      recruitsKilled: "1550",
      note: "Oh, bad!",
    },
  ];

  const [type, setType] = useState("Attacker");

  return (
    <Layout currentActiveTab={"headquarters"}>
      <div className="flex-1 flex flex-col relative mx-5 mt-[50px]">
        {/* <img className="absolute" src="/attack/log_back.svg" /> */}
        <div className="z-10">
          <div className="flex justify-around mx-5 my-3 px-5">
            <p
              className={`font-bold text-xl cursor-pointer ${type == "Attacker" ? "text-secondary underline" : "text-white"}`}
              onClick={() => setType("Attacker")}
            >
              [ Your attacks ]
            </p>
            <p
              className={`font-bold text-xl cursor-pointer ${type == "Defencer" ? "text-secondary underline" : "text-white"}`}
              onClick={() => setType("Defencer")}
            >
              [ Attacks on you ]
            </p>
          </div>
          <div className="text-white border-[1px] border-secondary-green rounded-md mt-2 h-[530px] ">
            <div className="flex w-full text-center text-xs font-bold text-yellow-200 border-b-[1px] border-secondary-green ">
              <div className="w-[5%] py-1">No</div>
              <div className="w-[20%] py-1">{type}</div>
              <div className="w-[10%] py-1">Result</div>
              <div className="w-[15%] py-1">Damage Caused</div>
              <div className="w-[15%] py-1">Recruits Killed</div>
              <div className="w-[35%] py-1">Note</div>
            </div>
            <div className="h-[495px] overflow-y-auto">
            {logs
                  .filter((l) => {
                    return l.type === type;
                  })
                  .map((log, index) => <div
                  className="flex w-full text-center text-sm border-b-[1px] border-secondary-green"
                  key={`attack_log_list_${type + index}`}
                >
                  <div className="w-[5%] py-1">{index + 1}</div>
                  <div className="w-[20%] py-1">{"sealife"}</div>
                  <div className="w-[10%] py-1">
                    {log.result}
                  </div>
                  <div className="w-[15%] py-1">
                   {log.damageCaused}
                  </div>
                  <div className="w-[15%] py-1">
                    {log.recruitsKilled}
                  </div>
                  <div className="w-[35%] py-1 break-all">
                    {log.note}
                  </div>
                </div>
                ) }
                </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
