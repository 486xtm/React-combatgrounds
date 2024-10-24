import React, { useState } from "react";
import { Layout } from "../../../common/components";
import { recruit } from "../../../api/user";
import { useDispatch } from "react-redux";

export const Recruit = () => {
  const [turn, setTurn] = useState();

  const dispatch = useDispatch();

  const handleRecruit = () => {
    recruit({ turn }, dispatch);
  };

  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <img
          src="pics/recruit.gif"
          width="500"
          height="50"
          className="ml-auto my-5"
        />
        <div className="flex flex-col mx-[100px] p-2 bg-custom-green gap-3">
          <div className="flex flex-col gap-5 bg-custom-light-green border border-white px-[50px] p-1">
            <p className="text-center text-white text-sm">
              Become more terrifying in the battlefield by recruiting new
              Soldiers here!
            </p>
            <p className="font-bold text-white text-sm text-center">
              The more turns you use, the more you can recruit.
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-white text-sm w-[45%] text-right">
              Number of turns:
            </p>
            <input
              className="rounded w-[120px] text-sm"
              onChange={(e) => setTurn(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <p className="text-white text-sm w-[45%] text-right">
              Select a place:
            </p>
            <select className="rounded text-sm w-[120px] ">
              <option>Russian Forces</option>
              <option>US Army</option>
              <option>British Military</option>
              <option>Terrorist Base</option>
              <option>French Legion</option>
            </select>
          </div>
          <button
            className="ml-[230px] w-[120px] rounded"
            onClick={handleRecruit}
          >
            Recruit!
          </button>
        </div>
      </div>
    </Layout>
  );
};
