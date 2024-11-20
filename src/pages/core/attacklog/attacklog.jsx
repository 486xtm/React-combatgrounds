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
      <div className="flex-1 flex flex-col relative mx-5 mt-[20px]">
        {/* <img className="absolute" src="/attack/log_back.svg" /> */}
        <p className="text-red-500 text-[30px] font-bold text-center text-shadow-glow my-2">Attack Log</p>
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
              <div className="w-[5%] py-2">No</div>
              <div className="w-[20%] py-2">{type}</div>
              <div className="w-[10%] py-2">Result</div>
              <div className="w-[15%] py-2">Damage Caused</div>
              <div className="w-[15%] py-2">Recruits Killed</div>
              <div className="w-[35%] py-2">Note</div>
            </div>
            <div className="h-[492px] overflow-y-auto">
            {logs
                  .filter((l) => {
                    return l.type === type;
                  })
                  .map((log, index) => <div
                  className="flex w-full text-center text-sm border-b-[1px] border-secondary-green"
                  key={`attack_log_list_${type + index}`}
                >
                  <div className="w-[5%] py-1">{index + 1}</div>
                  <div className="w-[20%] py-1 text-yellow-200">{"sealife"}</div>
                  <div className="w-[10%] py-1 text-green-500 ">
                    {log.result}
                  </div>
                  <div className="w-[15%] py-1">
                   {Number(log.damageCaused).toLocaleString()}
                  </div>
                  <div className="w-[15%] py-1">
                    {Number(log.recruitsKilled).toLocaleString()}
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
