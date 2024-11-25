import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAttackLogs } from "../../../api/attack";
import { formattedDate } from "../../../common/utils";
import { setAttackResult } from "../../../redux/userSlice";
import { socketURL } from "../../../common/constant";

export const AttackLog = () => {
  const [logs, setLogs] = useState([]);
  const [type, setType] = useState("Attacker");
  const [showModal, setShowModal] = useState(false);
  const [attackResult, setAttackResult] = useState(null);

  const dispatch = useDispatch();

  const attack_logs = useSelector(({ user }) => user.attack_logs);

  const closeModal = () => {
    setShowModal(false);
  };

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
                    <button
                      className="mx-auto my-1 rounded-lg border font-bold text-xs px-5 py-1 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                      onClick={() => {
                        setAttackResult(log);
                        setShowModal(true);
                      }}
                    >
                      View
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={closeModal}>
        {attackResult && (
          <div className="flex flex-col w-[600px] p-5 text-yellow-200 text-center">
            <div className="flex justify-center gap-6 items-center">
              <div className="w-[70px] text-center font-[900] text-red-500">
                <div className="flex rounded-full mb-2 overflow-hidden w-[70px] h-[70px] border border-[red] shadow-glow shadow-[red]">
                  <img
                    src={
                      attackResult.attacker.avatar
                        ? `${socketURL}/${attackResult.attacker.avatar}`
                        : "/pics/avatar.gif"
                    }
                    className="w-full h-auto"
                  />
                </div>
                {user && user.name}
              </div>
              <img src="/attack/vs.png" className="w-[120px]" />
              <div className="w-[70px] text-center font-[900] text-blue-500">
                <div className="flex rounded-full mb-2 overflow-hidden w-[70px] h-[70px] border border-[blue] shadow-glow shadow-[blue]">
                  <img src={"/pics/avatar.gif"} className="w-full h-auto" />
                </div>
                {attackResult.defenser && attackResult.defenser.name}
              </div>
            </div>
            <hr className="my-2" />
            <div className="mb-5 text-white leading-[30px] font-bold">
              <div>
                Your{" "}
                <span className="text-green-500">
                  {attackResult.att &&
                    Number(attackResult.att.recruits).toLocaleString()}
                </span>{" "}
                recruits shoot for{" "}
                <span className="text-green-500">
                  {attackResult.att &&
                    Number(attackResult.att.damage).toLocaleString()}
                </span>{" "}
                damage!
              </div>
              <div>{attackResult.def.name} defends your attack!</div>
              <div>
                {attackResult.def.name}'s{" "}
                <span className="text-red-500">
                  {attackResult.def &&
                    Number(attackResult.def.recruits).toLocaleString()}
                </span>{" "}
                recruits shoot for{" "}
                <span className="text-red-500">
                  {attackResult.def &&
                    Number(attackResult.def.damage).toLocaleString()}
                </span>{" "}
                damage!
              </div>
            </div>
            <div className="mb-5 text-white leading-[30px] font-bold">
              <div
                className={attackResult.win ? "text-green-500" : "text-red-600"}
              >
                {attackResult && attackResult.level} Level has been
                {attackResult.win ? " rewarded" : " deducted"}!
              </div>
              <div
                className={`text-[25px] ${
                  attackResult.win ? "text-green-500" : "text-red-700"
                } my-2`}
              >
                You have {attackResult.win ? "have won" : "have lost"} the
                attack!
              </div>
              {/* <div>
                Earning Yourself{" "}
                <span className="text-green-500">$2,822,494</span>
              </div>
              <div>
                You inflicted a loss of{" "}
                <span className="text-green-500"> $19,354,243</span>
              </div> */}
              {attackType === 0 ? (
                <>
                  <div>
                    {"You killed "}
                    <span className="text-green-500">
                      {attackResult.def &&
                        Number(attackResult.def.loss || 0).toLocaleString(
                          "en-US"
                        )}
                    </span>{" "}
                    troops during the conflict
                  </div>
                  <div>
                    {`${attackResult.def && attackResult.def.name} killed `}
                    <span className="text-green-500">
                      {attackResult.att &&
                        Number(attackResult.att.loss || 0).toLocaleString(
                          "en-US"
                        )}
                    </span>
                    {" troops during the conflict"}
                  </div>
                </>
              ) : (
                <>
                  <div>
                    {`${
                      attackResult && attackResult.win
                        ? "you cause "
                        : "The enemy cause "
                    }`}
                    <span className="text-green-500">
                      $
                      {attackResult.win
                        ? attackResult.def &&
                          (attackResult.def.loss || 0).toLocaleString("en-US")
                        : attackResult.att &&
                          (attackResult.att.loss || 0).toLocaleString("en-US")}
                    </span>
                    {` worth of damage to ${
                      attackResult && attackResult.win ? "your enemy" : "you"
                    }`}
                  </div>
                  {/* <div>
                    Your items got destroyed of worth{" "}
                    <span className="text-green-500">
                      $
                      {attackResult.att &&
                        (attackResult.att.loss || 0).toLocaleString()}
                    </span>
                  </div> */}
                  <div>
                    {`${
                      attackResult && attackResult.win ? "You" : "The enemy"
                    } got `}
                    <span className="text-green-500">
                      $
                      {Number(
                        (attackResult && attackResult.rewards) || 0
                      ).toLocaleString()}
                    </span>{" "}
                    {" as reward"}
                  </div>
                </>
              )}
            </div>
            <button
              className="mx-auto rounded-lg border font-bold text-xs px-10 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        )}
      </Modal>
    </Layout>
  );
};
