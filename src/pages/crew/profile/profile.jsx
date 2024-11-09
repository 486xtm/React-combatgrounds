import React, { useState, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css";
const mockdata = [];
export const CrewProfile = () => {
  const [tab, setTab] = useState(0);
  const memberList = [
    {
      name: "sealife",
      networth: 22222,
      rank: "Rank 1",
    },
    {
      name: "sealasdfife",
      networth: 22222,
      rank: "Rank 1",
    },
    {
      name: "sealife",
      networth: 22222,
      rank: "Rank 1",
    },
    {
      name: "sealife",
      networth: 22222,
      rank: "Rank 1",
    },
    {
      name: "sealife",
      networth: 22222,
      rank: "Rank 1",
    },
    {
      name: "sealife",
      networth: 22222,
      rank: "Rank 1",
    },
    {
      name: "",
      networth: 0,
      rank: "",
    },
    {
      name: "",
      networth: 0,
      rank: "",
    },
    {
      name: "",
      networth: 0,
      rank: "",
    },
    {
      name: "",
      networth: 0,
      rank: "",
    },
  ];

  function sliceString(str) {
    // Check if the string length is less than or equal to 8
    if (str.length <= 8) {
      return str; // Return the original string if it's too short
    }

    // Slice the first 5 characters
    const firstPart = str.slice(0, 5);
    // Slice the last 3 characters
    const lastPart = str.slice(-3);

    // Combine the two parts
    return firstPart + "..." + lastPart;
  }
  return (
    <CrewLayout title="Profile">
      <div className="flex flex-col w-full">
        <div className="absolute flex right-0 text-white font-bold gap-3 mr-10 -mt-8">
          <div
            className={`${tab == 0 && "text-yellow-200"} cursor-pointer`}
            onClick={() => setTab(0)}
          >
            Members
          </div>
          <div
            className={`${tab == 1 && "text-yellow-200"} cursor-pointer`}
            onClick={() => setTab(1)}
          >
            Crew Info
          </div>
        </div>
        <div
          className={` absolute right-0 rounded-lg h-[2px] bg-yellow-200 -mt-2 ${
            tab == 0 ? "mr-[118px] w-[85px]" : "mr-[38px] w-[80px]"
          } transition-all duration-200`}
        ></div>

        {tab == 1 && (
          <div className="text-white flex border-[1px] border-secondary-green rounded-md mx-2 mt-2 h-[300px]">
            <div className="w-1/2 border-r-[1px] border-secondary-green">
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">LEADER</div>
                <div className="w-[50%] py-1 text-white underline">Leader</div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">TOTAL MEMBERS</div>
                <div className="w-[50%] text-white py-1">{mockdata.length}</div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">AVERAGE MEMBER NET WORTH</div>
                <div className="w-[50%] text-white py-1">26,950</div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">CREW NET WORTH</div>
                <div className="w-[50%] text-white py-1">94,716</div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">BANK</div>
                <div className="w-[50%] text-white py-1">$2,040,857,326</div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200  border-secondary-green mt-2">
                <div className="w-[30%] py-1">RANKING SYSTEM</div>
                <div className="w-[30%] py-1 leading-none text-white">
                  Rank 1:
                  <br />
                  Rank 2:
                  <br />
                  Rank 3:
                  <br />
                  Rank 4:
                  <br />
                  Rank 5:
                  <br />
                </div>
                <div className="w-[40%] text-left py-1 leading-none text-white">
                  sealife <br />
                  sealife <br />
                  sealife <br />
                  sealife <br />
                  sealife <br />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-full py-1">Description</div>
              </div>
              <div className="text-left flex break-all text-xs overflow-y-auto px-2 py-1 mb-3 h-[100px] font-medium text-white ">
                {"This is Sealife's Crew , Battle king"}
              </div>
              <div className="flex text-center h-[150px] items-center justify-center font-medium text-yellow-200 border-t-[1px] border-secondary-green">
                <img
                  className="w-full h-auto"
                  src="/crew/crewpicdef.gif"
                  alt="img"
                />
              </div>
            </div>
          </div>
        )}
        {tab == 0 && (
          <div className="flex w-full px-5 mt-5 gap-3">
            <div className="w-1/5 flex flex-col items-center justify-center h-[250px] ">
              <div className="relative shadow-glow border-yellow-200 border-[1px] flex flex-col justify-center items-center rounded-xl overflow-hidden bg-dark-primary">
                <img
                  src="/avatar/avatar.png"
                  className=" mx-auto z-20 w-[120px] h-[120px] grayscale"
                />
                <div className="font-medium text-white my-1">LEADER</div>
              </div>
            </div>
            <div className="flex-1 flex p-2 h-[250px] border-[1px] rounded-lg flex-wrap justify-between gap-y-1">
              {memberList.map((val, indes) => (
                <div className="w-[19%] border-[1px] shadow-md shadow-dark-primary bg-dark-primary border-yellow-200 h-[115px] rounded-lg overflow-hidden flex flex-col items-center">
                  <img className={`h-[85px] w-[85px] ${val.name ? "": "grayscale"}`} src={val.name ? "/avatar/avatar.png" : "/avatar/default.png"} />
                  <div className="font-medium text-white text-xs mt-1">
                    {val.name ? sliceString(val.name) + (" - R1") : "------"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </CrewLayout>
  );
};
