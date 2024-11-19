import React, { useState } from "react";
import { Layout } from "../../../common/components";
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
  const handleAttack = () => {
    console.log(name, attackType, attackMsg);
  }
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
                onChange={(ev) => setattackType(ev.target.value)}
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

          <button className="mx-auto mt-4 rounded-lg border-2 font-bold  w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
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
                    <button className="mx-auto rounded-lg border font-bold text-xs px-2 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
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
    </Layout>
  );
};
