import React, { useState } from "react";
import { Layout } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { homeleave } from "../../../api/training";

export const HomeLeave = () => {
  const [cash, setCash] = useState("");

  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);

  const handleClick = () => {
    homeleave({ cash }, dispatch);
  };

  const handleMaxHomeLeave = () => {
    homeleave({ cash: -1 }, dispatch);
  };

  return (
    <Layout>
      <div className="flex flex-col flex-1 items-center">
        <img width="500" height="100" src="pics/homelve.jpg" alt="homelve.jpg" />
        <p className="text-center text-white font-bold text-sm">
          Let your troops have some rest so they can come back stronger!
        </p>
        <div className="flex gap-3 mt-5 py-5">
          <p className="text-white text-sm">Money cost: $</p>
          <input
            className="text-white bg-black text-sm px-2 w-[100px] border border-white hover:boder-gray-500 rounded"
            value={Number(cash).toLocaleString("en-US")}
            onChange={(e) => setCash(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <button
            onClick={handleClick}
            className="bg-black border text-white rounded px-2"
          >
            Go on Home Leave
          </button>
          <button
            onClick={handleMaxHomeLeave}
            className="bg-black border text-white rounded px-2"
          >
            Max
          </button>
        </div>
        <p className="text-white text-sm">
          Rest level:{" "}
          <span className="text-secondary">{user && Number(user.str5).toFixed(1)}%</span>
        </p>
      </div>
    </Layout>
  );
};
