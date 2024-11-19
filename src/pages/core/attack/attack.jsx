import React, { useState } from "react";
import { Layout } from "../../../common/components";
export const Attack = () => {
  const [tab, setTab] = useState(0);
  return (
    <Layout currentActiveTab={"headquarters"} isHeaderFull>
      <div className="flex flex-1 flex-col items-center  py-5 relative mx-10">
        <img width="500" height="50" src="/pics/attackplay.gif" />
        <img src="/attack/back.svg" className="w-full absolute top-[70px]" />
        <div className=" w-full min-h-[750px] text-white px-10 pt-10 z-10 flex flex-col gap-3">
          <div className="gap-3 flex flex-col mx-auto">
            <div className="flex">
              <div className="w-[70%] text-yellow-200 font-medium">
                Name of player to attack:
              </div>
              <input className="bg-transparent border-secondary-green shadow-inner w-[250px] shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm px-1 text-sm py-[1px] text-yellow-200" />
            </div>
            <div className="flex">
              <div className="w-[70%] text-yellow-200 font-medium">
                Attack type:
              </div>
              <select
                className="w-[250px] text-yellow-200 bg-transparent border-secondary-green shadow-inner border-[1px] shadow-[rgba(255,255,255,0.3)] rounded-sm"
                onChange={(e) => {}}
              >
                <option className="bg-secondary-green" value={1}>
                  Invasive
                </option>
                <option className="bg-secondary-green" value={2}>
                  Preventive
                </option>
                <option className="bg-secondary-green" value={3}>
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
              />
            </div>
          </div>

          <button className="mx-auto mt-4 rounded-lg border-2 font-bold  w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white">
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
        </div>
      </div>
    </Layout>
  );
};
