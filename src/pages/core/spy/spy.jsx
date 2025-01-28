import React, { useEffect, useState } from "react";
import { Layout } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { hireSpy } from "../../../api/user";

export const Spy = () => {
  const [name, setName] = useState("");
  const [showResult, setShowResult] = useState(false);

  const dispatch = useDispatch();

  const spy = useSelector(({ user }) => user.spy);

  const handleHireSpy = () => {
    if (showResult) {
      setShowResult(false);
    } else {
      hireSpy({ name }, dispatch);
      setShowResult(true);
    }
  };

  useEffect(() => {
    setName("");
  }, [showResult]);

  return (
    <Layout>
      <div className="flex-1 p-[100px] relative">
        <img src="/pics/SPY.gif" className="mx-auto w-full" alt="spy.gif" />
        {!showResult ? (
          <div className="absolute top-[270px] flex flex-col items-center gap-3 text-center left-0 right-0 text-white">
            <span className="font-bold">
              Hire secret agents to spy on your enemies.
            </span>

            <div className="flex">
              <div className="w-[130px]">Player to spy on:</div>{" "}
              <input
                className="text-black rounded px-1 "
                value={name}
                onChange={(ev) => {
                  setName(ev.target.value);
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
        ) : (
          <div className="absolute top-[250px] flex flex-col items-center gap-4 text-center left-0 right-0 text-white">
            <span className="font-bold text-lg mx-auto text-[red]">
              secret investigation report
            </span>
            <div className="flex flex-col">
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  Your Attack Power
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy ? Number(spy.ma_damage).toLocaleString("en-US") : "---"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  Your Defence Power
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy ? Number(spy.md_damage).toLocaleString("en-US") : "---"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  His Attack Power
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy ? Number(spy.ea_damage).toLocaleString("en-US") : "---"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  His Defence Power
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy ? Number(spy.ed_damage).toLocaleString("en-US") : "---"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  His recruits strength
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy ? Number(spy.e_strength).toLocaleString("en-US") : "---"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  His Attack Proficient
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy && Number(spy.e_ab1)
                    ? `Yes, For ${Number(spy.e_ab1).toLocaleString(
                        "en-US"
                      )} cycles`
                    : "No"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  His Defense Proficient
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy && Number(spy.e_ab2)
                    ? `Yes, For ${Number(spy.e_ab2).toLocaleString(
                        "en-US"
                      )} cycles`
                    : "No"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  His Recruits motivation
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy && Number(spy.e_ab3)
                    ? `Yes, For ${Number(spy.e_ab3).toLocaleString(
                        "en-US"
                      )} cycles`
                    : "No"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  His Raise funds ability
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy && Number(spy.e_ab4)
                    ? `Yes, For ${Number(spy.e_ab4).toLocaleString(
                        "en-US"
                      )} cycles`
                    : "No"}
                </div>
              </div>
              <div className="flex border rounded">
                <div className="border-r px-1 w-[200px] text-left">
                  His Power vision
                </div>
                <div className="px-1 w-[130px] text-left">
                  {spy && Number(spy.e_ab5)
                    ? `Yes, For ${Number(spy.e_ab5).toLocaleString(
                        "en-US"
                      )} cycles`
                    : "No"}
                </div>
              </div>
            </div>

            <div className="flex"></div>
            <button
              className="bg-[#008EBA] text-white rounded w-1/5  mx-auto  mt-5 hover:bg-[#008fba9d]"
              onClick={handleHireSpy}
            >
              Go Back!
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};
