import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAttackLogs } from "../../../api/attack";
import { formattedDate, pagination } from "../../../common/utils";
import { socketURL } from "../../../common/constant";
import Modal from "../../../common/components/modal/modal";

export const AttackLog = () => {
  const [logs, setLogs] = useState([]);
  const [type, setType] = useState("attacker");
  const [selectedLog, setSelectedLog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const dispatch = useDispatch();

  const attack_logs = useSelector(({ user }) => user.attack_logs);

  useEffect(() => {
    getAttackLogs({ page, type }, dispatch);
  }, [page, type]);

  useEffect(() => {
    if (!type || !attack_logs) return;
    setLogs(attack_logs.logs);
    setTotalPage(attack_logs.total);
  }, [attack_logs]);

  useEffect(() => {
    setPage(1);
  }, [type]);

  return (
    <Layout currentActiveTab={"headquarters"}>
      <div className="flex-1 flex flex-col relative mx-5 mt-[20px]">
        {/* <img className="absolute" src="/attack/log_back.svg" /> */}
        <p className="text-red-500 text-[30px] font-bold text-center my-2">
          Attack Logs
        </p>
        <div className="z-10">
          <div className="flex justify-around mx-5 my-3 px-5">
            <button
              className={`font-bold bg-transparent text-xl cursor-pointer ${
                type == "attacker" ? "text-secondary underline" : "text-white"
              }`}
              onClick={() => setType("attacker")}
            >
              [ Your attacks ]
            </button>
            <button
              className={`font-bold bg-transparent text-xl cursor-pointer ${
                type == "Defencer" ? "text-secondary underline" : "text-white"
              }`}
              onClick={() => setType("Defencer")}
            >
              [ Attacks on you ]
            </button>
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
                      {type === "attacker"
                        ? log.defenser.name
                        : log.attacker.name}
                    </div>
                    <div
                      className={`w-[10%] py-1 ${
                        !((type === "attacker") ^ log.result)
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {!((type === "attacker") ^ log.result) ? "WON" : "LOST"}
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
                        setSelectedLog(log);
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

        <div className="mx-auto flex text-secondary items-center">
          {Number(page) > 1 && (
            <span
              className="text-sm cursor-pointer"
              onClick={() => setPage(Number(page > 0 || 1) - 1)}
            >
              &lt;&lt;
            </span>
          )}
          {pagination({
            curPage: page,
            totalPage: totalPage + 1,
          }).map((p, idx) => (
            <span
              className={`px-1 cursor-pointer ${
                p === Number(page)
                  ? "text-secondary text-lg font-bold"
                  : "text-white text-sm"
              }`}
              key={`page__${idx}`}
              onClick={() => setPage(p)}
            >
              {p}
            </span>
          ))}
          {Number(page) < Number(totalPage) && (
            <span
              className="text-sm cursor-pointer"
              onClick={() => setPage(page + 1)}
            >
              &gt;&gt;
            </span>
          )}
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {selectedLog && (
          <div className="flex flex-col w-[600px] p-5 text-yellow-200 text-center">
            <div className="flex justify-center gap-6 items-center">
              <div className="w-[70px] text-center font-[900] text-red-500">
                <div className="flex rounded-full mb-2 overflow-hidden w-[70px] h-[70px] border border-[red] shadow-glow shadow-[red]">
                  <img
                    src={
                      selectedLog.attacker && selectedLog.attacker.avatar
                        ? `${socketURL}/${selectedLog.attacker.avatar}`
                        : "/pics/avatar.gif"
                    }
                    className="w-full h-auto"
                  />
                </div>
                {selectedLog.attacker
                  ? selectedLog.attacker.name
                  : "deleted user"}
              </div>
              <img src="/attack/vs.png" className="w-[120px]" />
              <div className="w-[70px] text-center font-[900] text-blue-500">
                <div className="flex rounded-full mb-2 overflow-hidden w-[70px] h-[70px] border border-[blue] shadow-glow shadow-[blue]">
                  <img
                    src={
                      selectedLog.defenser && selectedLog.defenser.avatar
                        ? `${socketURL}/${selectedLog.defenser.avatar}`
                        : "/pics/avatar.gif"
                    }
                    className="w-full h-auto"
                  />
                </div>
                {selectedLog.defenser
                  ? selectedLog.defenser.name
                  : "deleted user"}
              </div>
            </div>
            <hr className="my-2" />
            <div className="mb-5 text-white leading-[30px] font-bold">
              <div>
                {`${
                  type === "attacker"
                    ? "Your "
                    : `${
                        selectedLog.attacker ? selectedLog.attacker.name : "-"
                      }'s `
                }`}
                <span className="text-green-500">
                  {selectedLog.att &&
                    Number(selectedLog.att.recruits).toLocaleString()}
                </span>{" "}
                recruits shoot for{" "}
                <span className="text-green-500">
                  {selectedLog.att &&
                    Number(selectedLog.att.damage).toLocaleString()}
                </span>{" "}
                damage!
              </div>
              <div>
                {type === "attacker"
                  ? `You defended ${selectedLog.defenser.name}'s attack`
                  : `${selectedLog.defenser.name} defended your attack!`}
              </div>
              <div>
                {type === "attacker"
                  ? `${selectedLog.defenser.name}'s `
                  : "Your"}
                <span className="text-red-500">
                  {selectedLog.def &&
                    Number(selectedLog.def.recruits).toLocaleString()}
                </span>{" "}
                recruits shoot for{" "}
                <span className="text-red-500">
                  {selectedLog.def &&
                    Number(selectedLog.def.damage).toLocaleString()}
                </span>{" "}
                damage!
              </div>
            </div>
            <div className="mb-2 text-white leading-[30px] font-bold">
              {type === "attacker" && (
                <div
                  className={
                    selectedLog.result ? "text-green-500" : "text-red-600"
                  }
                >
                  {selectedLog && selectedLog.level} Level has been
                  {selectedLog.result ? " rewarded" : " deducted"}!
                </div>
              )}
              <div
                className={`text-[25px] ${
                  !(type === "attacker") ^ selectedLog.result
                    ? "text-green-500"
                    : "text-red-700"
                } my-2`}
              >
                You have{" "}
                {!(type === "attacker") ^ selectedLog.result
                  ? "have won"
                  : "have lost"}{" "}
                the attack!
              </div>
              {selectedLog.type === 0 ? (
                <>
                  <div>
                    {`${
                      type === "attacker"
                        ? `You`
                        : `${
                            selectedLog.attacker
                              ? selectedLog.attacker.name
                              : "-"
                          }`
                    } killed `}
                    <span className="text-green-500">
                      {selectedLog.def &&
                        Number(selectedLog.def.loss || 0).toLocaleString(
                          "en-US"
                        )}
                    </span>{" "}
                    troops during the conflict
                  </div>
                  <div>
                    {`${
                      type === "attacker"
                        ? selectedLog.defenser
                          ? selectedLog.defenser.name
                          : "-"
                        : "You"
                    } killed `}
                    <span className="text-green-500">
                      {selectedLog.att &&
                        Number(selectedLog.att.loss || 0).toLocaleString(
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
                      !((type === "attacker") ^ selectedLog.result)
                        ? "you cause "
                        : "The enemy cause "
                    }`}
                    <span className="text-green-500">
                      $
                      {selectedLog.result
                        ? selectedLog.def &&
                          (selectedLog.def.loss || 0).toLocaleString("en-US")
                        : selectedLog.att &&
                          (selectedLog.att.loss || 0).toLocaleString("en-US")}
                    </span>
                    {` worth of damage to ${
                      selectedLog && selectedLog.result ? "your enemy" : "you"
                    }`}
                  </div>
                  <div>
                    {`${
                      !((type === "attacker") ^ selectedLog.result)
                        ? "You"
                        : "The enemy"
                    } got `}
                    <span className="text-green-500">
                      $
                      {Number(
                        (selectedLog && selectedLog.rewards) || 0
                      ).toLocaleString()}
                    </span>{" "}
                    {" as reward"}
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col mx-auto gap-2">
              {selectedLog.destroyedItems &&
                selectedLog.destroyedItems.map((i, id) => (
                  <div className="flex" key={`destroyed_${id}`}>
                    <img
                      src={`/images/items/${i.item.avatar}`}
                      alt={i.item.avatar}
                      className="w-[25px] h-[25px] border"
                    />
                    <span className="text-white ml-4">{`${
                      !((type === "attacker") ^ selectedLog.result)
                        ? "You"
                        : `${
                            selectedLog.defenser
                              ? selectedLog.defenser.name
                              : "-"
                          }`
                    } destroyed ${i.count} of ${i.item.name}`}</span>
                  </div>
                ))}
            </div>
            <button
              className="mt-3 mx-auto rounded-lg border font-bold text-xs px-10 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        )}
      </Modal>
    </Layout>
  );
};
