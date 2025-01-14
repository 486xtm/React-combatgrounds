import React, { useState } from "react";
import { Layout } from "../../../common/components";
import { recruit } from "../../../api/user";
import { useDispatch } from "react-redux";
export const Recurit = () => {
  const [turn, setTurn] = useState(0);
  const [type, setType] = useState("US Army");

  const dispatch = useDispatch();

  const handleRecurit = () => {
    recruit({ turn, type }, dispatch);
    setTurn(0);
  };

  return (
    <Layout isHeaderFull>
      <div className="flex-1">
        <img className="mx-auto mt-10 mb-5" src="/pics/recruit.gif" />
        <div className="bg-[#456822] w-[500px] h-[250px] mx-auto p-3 flex flex-col items-center gap-3 text-white text-md">
          <div className="text-center border border-white  leading-none py-2 w-full bg-[#669933]">
            Become more terrifying in the battlefield by recruiting new <br />
            Soldiers here!
            <br />
            <br />
            <span className="font-bold">
              The more turns you use, the more you can recruit.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex">
              <div className="w-[130px]">Number of turns:</div>{" "}
              <input
                className="text-black rounded px-1"
                value={Number(turn).toLocaleString()}
                onChange={(e) =>
                  setTurn(Number(e.target.value.replace(/[^0-9]/g, "")))
                }
              />
            </div>
            <div className="flex">
              <div className="w-[130px]">Select a place:</div>
              <select
                className="text-black rounded flex-1"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value={"US Army"}>US Army</option>
                <option value={"British Military"}>British Military</option>
                <option value={"French Legion"}>French Legion</option>
                <option value={"Terrorist Base"}>Terrorist Base</option>
                <option value={"Russian Forces"}>Russian Forces</option>
              </select>
            </div>
            <button
              className="bg-gray-100 text-black rounded w-1/2 mx-auto  mt-5"
              onClick={handleRecurit}
            >
              Recruit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
