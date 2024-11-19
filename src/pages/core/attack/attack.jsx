import React, { useState } from "react";
import { Layout } from "../../../common/components";
import Modal from "../../../common/components/modal/modal";
const mock = [
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
  {
    name: "sealife",
    recruits: 2000,
    netWorth: 2000,
    money: 100000,
  },
];
export const Attack = () => {
  const [tab, setTab] = useState(0);
  const [name, setName] = useState("");
  const [attackType, setAttackType] = useState("Invasive");
  const [attackMsg, setAttackMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const handleAttack = () => {
    setShowModal(true);
    console.log(name, attackType, attackMsg);
  };
  return (
    <Layout currentActiveTab={"headquarters"} isHeaderFull>
      <div className="flex flex-1 flex-col items-center  py-5 relative mx-5">
        <img width="500" height="50" src="/pics/attackplay.gif" />
        <img src="/attack/back.svg" className="w-full absolute top-[70px]" />
        <div className=" w-full min-h-[750px] text-white px-5 pt-10 z-10 flex flex-col gap-3">
          <div className="gap-3 flex flex-col mx-auto">
            <div className="flex">
              <div className="w-[70%] text-yellow-200 font-medium">
                Name of player to attack:
              </div>
              <input
                className="bg-transparent border-secondary-green shadow-inner w-[250px] shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm px-1 text-sm py-[1px] text-yellow-200"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
            <div className="flex">
              <div className="w-[70%] text-yellow-200 font-medium">
                Attack type:
              </div>
              <select
                className="w-[250px] text-yellow-200 bg-transparent border-secondary-green shadow-inner border-[1px] shadow-[rgba(255,255,255,0.3)] rounded-sm"
                value={attackType}
                onChange={(ev) => setAttackType(ev.target.value)}
              >
                <option className="bg-secondary-green" value="Invasive">
                  Invasive
                </option>
                <option className="bg-secondary-green" value="Preventive">
                  Preventive
                </option>
                <option className="bg-secondary-green" value="Unexpected">
                  Unexpected
                </option>
              </select>
            </div>
            <div className="flex">
              <div className="w-[70%] text-yellow-200 font-medium">
                Attack Message:
              </div>
              <textarea
                rows={2}
                className="bg-transparent border-secondary-green shadow-inner w-[250px] shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm px-1 text-sm py-[1px] text-yellow-200"
                value={attackMsg}
                onChange={(ev) => setAttackMsg(ev.target.value)}
              />
            </div>
          </div>

          <button
            className="mx-auto mt-4 rounded-lg border-2 font-bold  w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
            onClick={handleAttack}
          >
            Attack
          </button>
          <hr className="border-dark-primary mt-2 mb-1" />
          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                className="bg-transparent border-secondary-green shadow-inner w-[150px] shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm px-1 text-sm py-[1px] text-yellow-200 placeholder-yellow-200 placeholder:opacity-70"
                placeholder="Search By Name"
              />

              <button className="ml-3 rounded-lg border font-bold  w-[100px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white ">
                Search
              </button>
            </div>
            <div className="flex items-center">
              <div className="absolute flex right-0 text-white font-bold gap-2 mr-10 -mt-8">
                <div
                  className={`${tab == 0 && "text-yellow-200"} cursor-pointer`}
                  onClick={() => setTab(0)}
                >
                  Free Players
                </div>
                <div
                  className={`${tab == 1 && "text-yellow-200"} cursor-pointer`}
                  onClick={() => setTab(1)}
                >
                  Supporters
                </div>
              </div>
              <div
                className={` absolute right-0 rounded-lg h-[2px] bg-yellow-200 -mt-2 ${
                  tab == 0 ? "mr-[125px] w-[100px]" : "mr-[35px] w-[90px]"
                } transition-all duration-200`}
              ></div>
            </div>
          </div>

          <div className="text-white border-[1px] border-secondary-green rounded-md mt-2 h-[430px] ">
            <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
              <div className="w-[10%] py-1">No</div>
              <div className="w-[20%] py-1">Name</div>
              <div className="w-[20%] py-1">Recruits</div>
              <div className="w-[20%] py-1">Net Worth</div>
              <div className="w-[20%] py-1">Money</div>
              <div className="w-[10%] py-1">Action</div>
            </div>
            <div className="h-[395px] overflow-y-auto">
              {mock.map((user, index) => (
                <div
                  className="flex w-full text-center border-b-[1px] border-secondary-green"
                  key={`attack_list_${index}`}
                >
                  <div className="w-[10%] py-1">{index + 1}</div>
                  <div className="w-[20%] py-1">{user.name}</div>
                  <div className="w-[20%] py-1">
                    {Number(user.recruits).toLocaleString()}
                  </div>
                  <div className="w-[20%] py-1">
                    {Number(user.netWorth).toLocaleString()}
                  </div>
                  <div className="w-[20%] py-1">
                    ${Number(user.money).toLocaleString()}
                  </div>
                  <div className="w-[10%] py-1">
                    <button
                      className="mx-auto rounded-lg border font-bold text-xs px-2 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                      onClick={() => setName(user.name)}
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={closeModal}>
        <div className="flex flex-col w-[600px] p-5 text-yellow-200 text-center">
          <div className="flex justify-center gap-6 items-center">
            <div className="w-[70px] text-center font-[900] text-red-500">
              <div className="flex rounded-full mb-2 overflow-hidden w-[70px] h-[70px] border border-[red] shadow-glow shadow-[red]">
                <img src="/pics/avatar.gif" className="w-full h-auto" />
              </div>
              Sealife2
            </div>
            <img src="/attack/vs.png" className="w-[120px]" />
            <div className="w-[70px] text-center font-[900] text-blue-500">
              <div className="flex rounded-full mb-2 overflow-hidden w-[70px] h-[70px] border border-[blue] shadow-glow shadow-[blue]">
                <img src="/pics/avatar.gif" className="w-full h-auto" />
              </div>
              Sealife23
            </div>
          </div>
          <hr className="my-2" />
          <div className="mb-5 text-white leading-[30px] font-bold">
            <div className="">You just attacked {name}</div>
            <div>
              Your <span className="text-green-500">67,678</span> recruits shoot
              for <span className="text-green-500">137,140,026</span> damage!
            </div>
            <div>sealife22312 defends your attack!</div>
            <div>
              sealife22312's <spna className="text-red-500">68,181</spna>{" "}
              recruits shoot for{" "}
              <spna className="text-red-500">120,722,445</spna> damage!
            </div>
          </div>
          <div className="mb-5 text-white leading-[30px] font-bold">
            <div className="text-green-500">+5 Level has been rewarded!</div>
            <div className="text-[25px] text-green-500 my-2">
              You have won the attack!
            </div>
            <div>
              Earning Yourself{" "}
              <span className="text-green-500">$2,822,494</span>
            </div>
            <div>
              You inflicted a loss of{" "}
              <span className="text-green-500"> $19,354,243 </span>
            </div>
            <div>
              Number of enemy recruits killed{" "}
              <span className="text-green-500">377</span>
            </div>
          </div>
          <button
            className="mx-auto rounded-lg border font-bold text-xs px-10 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
            onClick={closeModal}
          >
            OK
          </button>
        </div>
      </Modal>
    </Layout>
  );
};
