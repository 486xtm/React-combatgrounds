import React, { useState } from "react";
import { Layout } from "../../../common/components";

export const Spy = () => {
  const [userName, setUserName] = useState("");
  const handleHireSpy = () => {};
  return (
    <Layout>
      <div className="flex-1 p-[100px] relative">
        <img src="/pics/SPY.gif" className="mx-auto w-full" />
        <div className="absolute top-[270px] flex flex-col items-center gap-3 text-center left-0 right-0 text-white">
          <span className="font-bold">
            Hire secret agents to spy on your enemies.
          </span>

          <div className="flex">
            <div className="w-[130px]">Player to spy on:</div>{" "}
            <input
              className="text-black rounded px-1 "
              value={userName}
              onChange={(ev) => {
                setUserName(ev.target.value);
              }}
            />
          </div>
          <button
            className="bg-[#008EBA] text-white rounded w-1/5  mx-auto  mt-5 hover:bg-[#008fba9d]"
            onClick={handleHireSpy}
          >
            Dispatch!
          </button>
          <span className="text-red-500 font-bold text-sm">
            This option takes 20 turns.
          </span>
        </div>
      </div>
    </Layout>
  );
};
