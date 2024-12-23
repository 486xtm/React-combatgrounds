import React, { useState, useEffect } from "react";
import { getRound } from "../../../api/headquarter";
import { useDispatch, useSelector } from "react-redux";
import { updateBounty } from "../../../api/admin";

export const RoundData = () => {
  const [showModal, setShowModal] = useState();
  const [newBounty, setNewBounty] = useState("");

  const dispatch = useDispatch();

  const round = useSelector(({ round }) => round.info);

  useEffect(() => {
    getRound(dispatch);
  }, []);

  useEffect(() => {
    console.log("round===>", round);
    if (!round) return;
    setNewBounty(round.bounty);
  }, [round]);

  const handleBountyUpdate = () => {
    updateBounty({ newBounty }, dispatch);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-3xl font-extrabold text-left">Round Data:</p>
      <div className="flex items-center flex-1 bg-white my-20 px-5 py-7 rounded-lg">
        <span className="text-xl font-bold">Cash Bounty: </span>
        <input
          className="border border-gray-400 rounded p-1 ml-2"
          defaultValue={newBounty}
          onChange={(e) => {
            setNewBounty(e.target.value);
          }}
        />
        <button
          // onClick={handleResetUser}
          className="bg-[#014CFA] rounded-lg py-2 px-5 ml-auto text-white shadow-lg  hover:bg-blue-500 mt-2"
          onClick={handleBountyUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};
