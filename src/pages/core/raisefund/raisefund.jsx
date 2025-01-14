import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { raiseFund } from "../../../api/user";

export const RaiseFund = () => {
  const user = useSelector(({ user }) => user.user);
  const [isTerrorist, setIsTerrorist] = useState(false);
  const [turns, setTurns] = useState([0, 0, 0, 0]); // Initialize turns as numbers
  const dispatch = useDispatch();

  const handleTurnChange = (id, val) => {
    if (!turns) return;

    // Remove non-numeric characters
    const numericValue = val.replace(/[^0-9]/g, '');
    const newTurns = [...turns]; // Use spread operator for immutability
    newTurns[id] = Number(numericValue); // Convert to number
    setTurns(newTurns);
  };

  const handleFund = (fundType) => {
    raiseFund({ fundType, turn: turns[fundType] }, dispatch);
    setTurns([0, 0, 0, 0]); // Reset turns after funding
  };

  useEffect(() => {
    setIsTerrorist(!!user && user.characterType === "Terrorist");
  }, [user]);

  return (
    <Layout>
      <div className="flex flex-1 flex-col items-center">
        <img width="500" height="100" src="/pics/raisefunds.gif" alt="Raise Funds" />
        <div className="flex w-full px-[100px]">
          <div className="flex flex-col flex-1 gap-[80px]">
            <div className="flex justify-between">
              {[
                {
                  img: isTerrorist ? "/pics/drugs.jpg" : "/pics/refinery.jpg",
                  text: isTerrorist ? "Produce and sell narcotics" : "Exploit refineries",
                  buttonText: isTerrorist ? "Produce" : "Exploit",
                  index: 0,
                  warning: "You need recruits and earn Cash"
                },
                {
                  img: isTerrorist ? "/pics/sponsor.jpg" : "/pics/industry.jpg",
                  text: isTerrorist ? "Collect donations from sponsors" : "Collect money from industries",
                  buttonText: "Collect",
                  index: 1,
                  warning: "You need Level and earn Cash."
                }
              ].map(({ img, text, buttonText, index, warning }) => (
                <div key={index} className="flex flex-col items-center gap-1 flex-1">
                  <img src={img} width="145" height="108" alt={text} />
                  <p className="text-white text-xs">{text}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-white">Use</span>
                    <input
                      type="text" // Changed to text to allow formatted input
                      className="w-12 border-white border bg-black rounded text-white text-xs px-1 outline-0 focus:border-gray-500"
                      value={turns[index] ? Number(turns[index]).toLocaleString('en-US') : ''}
                      onChange={(e) => handleTurnChange(index, e.target.value)}
                    />
                    <span className="text-xs text-white">turns</span>
                    <button
                      className="bg-black text-xs text-white border-white border hover:border-gray-500"
                      onClick={() => handleFund(index)}
                    >
                      {buttonText}
                    </button>
                  </div>
                  <span className="text-[red] text-xs text-center">{warning}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              {[
                {
                  img: isTerrorist ? "/pics/hitmen.jpg" : "/pics/trainingRF.jpg",
                  text: isTerrorist ? "Work as hitmen." : "Give special training",
                  buttonText: isTerrorist ? "Go" : "Deliver",
                  index: 2,
                  warning: "You earn level."
                },
                {
                  img: isTerrorist ? "/pics/guns.jpg" : "/pics/protect.jpg",
                  text: isTerrorist ? "Smuggle weapons" : "Provide military protection",
                  buttonText: isTerrorist ? "Smuggle" : "Protect",
                  index: 3,
                  warning: ""
                }
              ].map(({ img, text, buttonText, index, warning }) => (
                <div key={index} className="flex flex-col items-center gap-1 flex-1">
                  <img src={img} width="145" height="108" alt={text} />
                  <p className="text-white text-xs">{text}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-white">Use</span>
                    <input
                      type="text" // Changed to text to allow formatted input
                      className="w-12 border-white border bg-black rounded text-white text-xs px-1 outline-0 focus:border-gray-500"
                      value={turns[index] ? Number(turns[index]).toLocaleString('en-US') : ''}
                      onChange={(e) => handleTurnChange(index, e.target.value)}
                    />
                    <span className="text-xs text-white">turns</span>
                    <button
                      className="bg-black text-xs text-white border-white border hover:border-gray-500"
                      onClick={() => handleFund(index)}
                    >
                      {buttonText}
                    </button>
                  </div>
                  {warning && <span className="text-[red] text-xs text-center">{warning}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
