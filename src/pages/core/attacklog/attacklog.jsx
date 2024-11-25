import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAttackLogs } from "../../../api/attack";
import { formattedDate } from "../../../common/utils";
import { socketURL } from "../../../common/constant";

export const AttackLog = () => {
  const [logs, setLogs] = useState([]);
  const [type, setType] = useState("Attacker");

  const dispatch = useDispatch();

  const attack_logs = useSelector(({ user }) => user.attack_logs);

  useEffect(() => {
    getAttackLogs(dispatch);
  }, []);

  useEffect(() => {
    if (!type || !attack_logs) return;
    if (type === "Attacker") setLogs(attack_logs.attacks);
    else setLogs(attack_logs.defences);
  }, [attack_logs, type]);

  return (
    <Layout currentActiveTab={"headquarters"}>
      <div className="flex-1 flex flex-col relative mx-5 mt-[20px]">
        {/* <img className="absolute" src="/attack/log_back.svg" /> */}
        <p className="text-red-500 text-[30px] font-bold text-center my-2">
          Attack Logs
        </p>
        <div className="z-10">
          <div className="flex justify-around mx-5 my-3 px-5">
            <p
              className={`font-bold text-xl cursor-pointer ${
                type == "Attacker" ? "text-secondary underline" : "text-white"
              }`}
              onClick={() => setType("Attacker")}
            >
              [ Your attacks ]
            </p>
            <p
              className={`font-bold text-xl cursor-pointer ${
                type == "Defencer" ? "text-secondary underline" : "text-white"
              }`}
              onClick={() => setType("Defencer")}
            >
              [ Attacks on you ]
            </p>
          </div>
          <div className="text-white border-[1px] border-secondary-green rounded-md mt-2 h-[530px] ">
            <div className="flex w-full text-center text-xs font-bold text-yellow-200 border-b-[1px] border-secondary-green ">
              <div className="w-[5%] py-2">No</div>
              <div className="w-[20%] py-2">Enemy</div>
              <div className="w-[10%] py-2">Result</div>
              <div className="w-[25%] py-2">Note</div>
              <div className="w-[25%] py-2">Date</div>
              <div className="w-[15%] py-2">View</div>
            </div>
            <div className="h-[492px] overflow-y-auto">
              {logs &&
                logs.map((log, index) => (
                  <div
                    className="flex w-full text-center text-sm border-b-[1px] border-secondary-green"
                    key={`attack_log_list_${type + index}`}
                  >
                    <div className="w-[5%] py-1">{index + 1}</div>
                    <div className="w-[20%] py-1 text-yellow-200">
                      {type === "Attacker"
                        ? log.defenser.name
                        : log.attacker.name}
                    </div>
                    <div
                      className={`w-[10%] py-1 ${
                        !((type === "Attacker") ^ log.result)
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {!((type === "Attacker") ^ log.result) ? "WON" : "LOST"}
                    </div>
                    <div className="w-[25%] py-1">
                      {log.note.length < 10
                        ? log.note
                        : log.note.slice(0, 7) + "..." + log.note.slice(-3)}
                    </div>
                    <div className="w-[25%] py-1">
                      {formattedDate(log.createdAt)}
                    </div>
                    <button className="mx-auto my-1 rounded-lg border font-bold text-xs px-5 py-1 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white">
                      View
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
