import React, { useState, useRef } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css";
import { useScriptProviderContext } from "@paypal/react-paypal-js";
const mockdata = [
  {
    name: "sealife",
    rank: "leader",
    cash: 200000,
  },
  {
    name: "sealife",
    rank: "leader",
    cash: 200000,
  },
  {
    name: "sealife",
    rank: "leader",
    cash: 200000,
  },
  {
    name: "sealife",
    rank: "leader",
    cash: 200000,
  },
  {
    name: "sealife",
    rank: "leader",
    cash: 200000,
  },
  {
    name: "sealife",
    rank: "leader",
    cash: 200000,
  },
];
export const CrewManage = () => {
  const [tab, setTab] = useState(0);

  const [invite, setInviter] = useState("");
  const [crewAvatar, setCrewAvatar] = useState("");
  const [crewImgSrc, setCrewImgSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleBoot = (member) => {};
  const handleMakeReader = (member) => {};
  const handleChangeRank = (member) => {};
  const handleEditCrew = () => {};
  const handleDisbandCrew = () => {};
  const handleLeaveCrew = () => {};
  const handleUploadCrewAvatar = () => {}
  const handleInvitePlayer = () => {}
  return (
    <CrewLayout title="Manage">
      <div className="absolute flex right-0 text-white font-bold gap-2 mr-10 -mt-8">
        <div
          className={`${tab == 0 && "text-yellow-200"} cursor-pointer`}
          onClick={() => setTab(0)}
        >
          Member Action
        </div>
        <div
          className={`${tab == 1 && "text-yellow-200"} cursor-pointer`}
          onClick={() => setTab(1)}
        >
          Crew Action
        </div>
      </div>
      <div
        className={` absolute right-0 rounded-lg h-[2px] bg-yellow-200 -mt-2 ${
          tab == 0 ? "mr-[139px] w-[120px]" : "mr-[35px] w-[100px]"
        } transition-all duration-200`}
      ></div>
      <div className="flex flex-col w-full">
        {tab == 0 && (
          <div className="text-white border-[1px] border-secondary-green rounded-md mx-2 mt-2 h-[300px]">
            <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
              <div className="w-[20%] py-1">Name</div>
              <div className="w-[20%] py-1">Rank</div>
              <div className="w-[20%] py-1">Transferred Cash</div>
              <div className="w-[40%] py-1">Action</div>
            </div>
            <div className="h-[220px] border-b-[1px] border-secondary-green overflow-y-auto">
              {mockdata &&
                mockdata.map((member, index) => (
                  <div
                    className="flex w-full text-center border-b-[1px] border-secondary-green"
                    key={`crew_manage_${index}`}
                  >
                    <div className="w-[20%] py-1">{member.name}</div>
                    <div className="w-[20%] py-1">{member.rank}</div>
                    <div className="w-[20%] py-1">
                      {Number(member.cash).toLocaleString()}
                    </div>
                    <div className="w-[40%] py-1  px-1 ">
                      {false ? (
                        <div className="flex justify-between">
                          <button
                            onClick={() => {
                              handleBoot(member);
                            }}
                            className=" rounded-lg border-2 px-2 border-yellow-200 bg-transparent hover:shadow-glow_small hover:shadow-white"
                          >
                            Boot
                          </button>
                          <button
                            onClick={() => {
                              handleMakeReader(member);
                            }}
                            className=" rounded-lg border-2 px-2 border-yellow-200 bg-transparent hover:shadow-glow_small hover:shadow-white"
                          >
                            Make leader
                          </button>
                          <button
                            onClick={() => {
                              handleChangeRank(member);
                            }}
                            className=" rounded-lg border-2 px-2 border-yellow-200 bg-transparent hover:shadow-glow_small hover:shadow-white"
                          >
                            Change Rank
                          </button>
                        </div>
                      ) : (
                        "-"
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex justify-center mt-2">
              {true ? (
                <div className="flex gap-4">
                  <button
                    onClick={handleEditCrew}
                    className=" rounded-lg border-2 font-bold  w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                  >
                    Edit Crew
                  </button>
                  <button
                    onClick={handleDisbandCrew}
                    className=" rounded-lg border-2 font-bold w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                  >
                    Disband Crew
                  </button>
                </div>
              ) : (
                <div className="">
                  <button
                    onClick={handleLeaveCrew}
                    className=" rounded-lg border-2 font-bold w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
                  >
                    Leave Crew
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {tab ==1 && <div className="mx-4 mt-5 flex">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="flex mb-3">
              <div className="w-[100px]">Invite Player: </div>
              <input
                onChange={(ev) => setInviter(ev.target.value)}
                className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]"
              />
            </div>

            <div className="flex mb-3">
              <div className="w-[100px]">Rank: </div>
              <select className="bg-transparent border-secondary-green shadow-inner border-[1px] shadow-[rgba(255,255,255,0.3)] w-[100px] rounded-sm">
                <option className="bg-secondary-green">Rank 1</option>
                <option className="bg-secondary-green">Rank 2</option>
                <option className="bg-secondary-green">Rank 3</option>
                <option className="bg-secondary-green">Rank 4</option>
                <option className="bg-secondary-green">Rank 5</option>
              </select>
            </div>

            <div className="text-center font-bold text-[red] my-5">
              A crew can have at most 10 players. Crew members can be changed,
              however a maximum of 15 invites to the crew can be accepted during
              a round. 13 invites left.
            </div>
            <button
              onClick={handleInvitePlayer}
              className=" rounded-lg border-2 font-bold  w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
            >
              Invite Player
            </button>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex justify-center mb-5">
              <div
                className="border-[1px] rounded-lg border-white px-2 cursor-pointer shadow-glow_small py-[1px]"
                onClick={() => fileInputRef.current.click()}
              >
                Upload image
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden text-xs min-w-[400px] "
                onChange={(e) => {
                  setCrewAvatar(e.target.files[0]);
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setCrewImgSrc(reader.result); // Set the image source to the file's data URL
                    };
                    reader.readAsDataURL(file); // Read the file as a data URL
                  }
                }}
              />
            </div>
            <div className="flex justify-center w-[170px] h-[170px] rounded-lg mb-5 border-secondary-green border-[1px] mx-auto">
              {crewImgSrc ? (
                <img
                  src={crewImgSrc}
                  className="rounded-lg w-[170px] h-[170px]"
                  alt="Selected"
                />
              ) : (<div className="flex items-center justify-center">Preview Image</div>)}
            </div>

            <button
              onClick={handleUploadCrewAvatar}
              className="mx-auto rounded-lg border-2 font-bold w-[150px] border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
            >
              Uplad Avatar
            </button>
          </div>
        </div>}
      </div>
    </CrewLayout>
  );
};
