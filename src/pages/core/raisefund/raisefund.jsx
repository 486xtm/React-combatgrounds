import React from "react";
import { Layout } from "../../../common/components";

export const RaiseFund = () => {
  return (
    <Layout>
      <div className="flex flex-1 flex-col items-center">
        <img width="500" height="100" src="pics/raisefunds.gif" />
        <div className="flex w-full px-[100px]">
          <div className="flex flex-col flex-1 gap-[80px]">
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-1 flex-1">
                <img src="pics/refinery.jpg" width="145" height="108" />
                <p className="text-white text-xs">Exploit refineries</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Use</span>
                  <input className="w-12 border-white border bg-black rounded text-white text-xs px-1 focus:border-gray-500 outline-0" />
                  <span className="text-xs text-white">turns</span>
                  <button className="bg-black text-xs text-white border-white border hover:border-gray-500">
                    Exploit
                  </button>
                </div>
                <span className="text-red-600 text-xs text-center">You need recruits.</span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <img src="pics/industry.jpg" width="145" height="108" />
                <p className="text-white text-xs">
                  Collect money from industries
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Use</span>
                  <input className="w-12 border-white border bg-black rounded text-white text-xs px-1 focus:border-gray-500 outline-0" />
                  <span className="text-xs text-white">turns</span>
                  <button className="bg-black text-xs text-white border-white border hover:border-gray-500">
                    Collect
                  </button>
                </div>
                <span className="text-red-600 text-xs text-center">
                  You need recruits and level.
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-1 flex-1">
                <img src="pics/trainingRF.jpg" width="145" height="108" />
                <p className="text-white text-xs">Give special training</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Use</span>
                  <input className="w-12 border-white border bg-black rounded text-white text-xs px-1 focus:border-gray-500 outline-0" />
                  <span className="text-xs text-white">turns</span>
                  <button className="bg-black text-xs text-white border-white border hover:border-gray-500">
                    Deliver
                  </button>
                </div>
                <span className="text-red-600 text-xs text-center">
                  You need recruits.<br></br> You earn level.
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <img src="pics/protect.jpg" width="145" height="108" />
                <p className="text-white text-xs">
                  Provide military protection
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-white">Use</span>
                  <input className="w-12 border-white border bg-black rounded text-white text-xs px-1 focus:border-gray-500 outline-0" />
                  <span className="text-xs text-white">turns</span>
                  <button className="bg-black text-xs text-white border-white border hover:border-gray-500">
                    Protect
                  </button>
                </div>
                <span className="text-red-600 text-xs text-center">
                  You need recruits and defense weapons.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
