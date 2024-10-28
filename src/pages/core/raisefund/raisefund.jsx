import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { raiseFund } from "../../../api/user";

export const RaiseFund = () => {
  const user = useSelector(({ user }) => user.user);

  const [isTerrorist, setIsTerrorist] = useState(false);
  const [turns, setTruns] = useState([0, 0, 0, 0]);

  const dispatch = useDispatch();

  const handleTurnChange = (id, val) => {
    if (!turns) return;
    let newTurns = turns;
    newTurns[id] = val;
    setTruns(newTurns);
  };

  const handleFund = (fundType) => {
    raiseFund({ fundType, turn: turns[fundType] }, dispatch);
  };

  useEffect(() => {
    setIsTerrorist(!!user && user.characterType === "Terrorist");
  }, [user]);

  return (
    <Layout>
      <div className="flex flex-1 flex-col items-center">
        <img width="500" height="100" src="/pics/raisefunds.gif" />
        <div className="flex w-full px-[100px]">
          <div className="flex flex-col flex-1 gap-[80px]">
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-1 flex-1">
                <img
                  src={isTerrorist ? "/pics/drugs.jpg" : "/pics/refinery.jpg"}
                  width="145"
                  height="108"
                />
                <p className="text-white text-xs">
                  {isTerrorist
                    ? "Produce and sell narcotics"
                    : "Exploit refineries"}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Use</span>
                  <input
                    type="number"
                    className="w-12 border-white border bg-black rounded text-white text-xs px-1 outline-0 focus:border-gray-500"
                    onChange={(e) => handleTurnChange(0, e.target.value)}
                  />
                  <span className="text-xs text-white">turns</span>
                  <button
                    className="bg-black text-xs text-white border-white border hover:border-gray-500"
                    onClick={() => handleFund(0)}
                  >
                    {isTerrorist ? "Produce" : "Exploit"}
                  </button>
                </div>
                <span className="text-[red] text-xs text-center">
                  You need recruits.
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <img
                  src={isTerrorist ? "/pics/sponsor.jpg" : "/pics/industry.jpg"}
                  width="145"
                  height="108"
                />
                <p className="text-white text-xs">
                  {isTerrorist
                    ? "Collect donations from sponsors"
                    : "Collect money from industries"}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Use</span>
                  <input
                    type="number"
                    className="w-12 border-white border bg-black rounded text-white text-xs px-1 outline-0 focus:border-gray-500"
                    onChange={(e) => handleTurnChange(1, e.target.value)}
                  />
                  <span className="text-xs text-white">turns</span>
                  <button
                    className="bg-black text-xs text-white border-white border hover:border-gray-500"
                    onClick={() => handleFund(1)}
                  >
                    Collect
                  </button>
                </div>
                <span className="text-[red] text-xs text-center">
                  You need Level and earn Cash.
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-1 flex-1">
                <img
                  src={isTerrorist ? "/pics/hitmen.jpg" : "/pics/trainingRF.jpg"}
                  width="145"
                  height="108"
                />
                <p className="text-white text-xs">
                  {isTerrorist ? "Work as hitmen." : "Give special training"}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Use</span>
                  <input
                    type="number"
                    className="w-12 border-white border bg-black rounded text-white text-xs px-1 outline-0 focus:border-gray-500"
                    onChange={(e) => handleTurnChange(2, e.target.value)}
                  />
                  <span className="text-xs text-white">turns</span>
                  <button
                    className="bg-black text-xs text-white border-white border hover:border-gray-500"
                    onClick={() => handleFund(2)}
                  >
                    {isTerrorist ? "Go" : "Deliver"}
                  </button>
                </div>
                <span className="text-[red] text-xs text-center">
                  You earn level.
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <img
                  src={isTerrorist ? "/pics/guns.jpg" : "/pics/protect.jpg"}
                  width="145"
                  height="108"
                />
                <p className="text-white text-xs">
                  {isTerrorist
                    ? "Smuggle weapons"
                    : "Provide military protection"}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Use</span>
                  <input
                    type="number"
                    className="w-12 border-white border bg-black rounded text-white text-xs px-1 outline-0 focus:border-gray-500"
                    onChange={(e) => handleTurnChange(3, e.target.value)}
                  />
                  <span className="text-xs text-white">turns</span>
                  <button
                    className="bg-black text-xs text-white border-white border hover:border-gray-500"
                    onClick={() => handleFund(3)}
                  >
                    {isTerrorist ? "Smuggle" : "Protect"}
                  </button>
                </div>
                <span className="text-[red] text-xs text-center">
                  You earn troops.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
