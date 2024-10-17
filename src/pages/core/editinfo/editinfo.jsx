import React from "react";
import styles from "./styles.module.css";
import { Header, Menu } from "../../../common/components";

export const EditInfo = () => {
  return (
    <div className={styles["edit-info-container"]}>
      <Header currentActiveTab="hall-of-fame" />
      <div className="flex flex-col w-[870px] border-primary border-2 bg-black">
        <div className={styles["status-bar"]}>
          <div className="flex flex-col">
            <div className="flex pt-1">
              <span className="text-black text-sm pl-[160px] font-bold w-[460px]">
                SeaLife24111
              </span>
              <span className="text-secondary text-sm pl-3 font-bold">
                2,083
              </span>
            </div>
            <div className="flex pt-1">
              <span className="text-secondary text-sm pl-[200px] font-bold w-[460px]">
                35,471
              </span>
              <span className="text-secondary text-sm pl-3 font-bold">
                452,319
              </span>
            </div>
            <div className="flex pt-1">
              <span className="text-secondary text-sm pl-[472px] font-bold">
                $552,452,319
              </span>
            </div>
            <div className="flex pt-1">
              <div className="black text-sm ml-[90px] font-bold w-[200px] h-5 border-2 border-gray">
                <div className="bg-gray-100 text-center text-gray-500 w-[30%] h-full">
                  30%
                </div>
              </div>
              <span className="text-secondary text-sm pl-[182px] font-bold">
                25
              </span>
            </div>
          </div>
          <div className="text-xxl font-bold text-secondary ml-[160px] mt-[50px]">
            25
          </div>
        </div>
        <div className="flex">
          <div className={styles["buy-turns"]} />
          <div className={styles["subscribe"]} />
        </div>
        <div className="flex min-h-[625px] w-full bg-black pb-[20px]">
          <Menu />
          <div className="flex-1 flex flex-col mx-[40px]">
            <p className="text-secondary text-xl font-bold text-center mt-5">
              Edit Profile info
            </p>
            <div className="flex flex-col border-2 border-gray-500 bg-custom-gray mt-5">
              <div className="flex flex-col p-3">
                <div className="flex gap=30px">
                  <span className="text-white font-bold text-sm w-[110px]">
                    AIM screen name:
                  </span>
                  <input className="flex-1 text-sm px-2 py-1" />
                </div>
                <div className="flex gap-30px mt-5">
                  <span className="text-white font-bold text-sm w-[110px]">
                    Profile description
                  </span>
                  <textarea
                    className="flex-1 text-sm px-2 py-1"
                    maxLength={450}
                    rows={10}
                  />
                </div>
                <div className="flex mt-5 mx-auto gap-3">
                  <span className="text-sm text-white text-bold">
                    450 characters left
                  </span>
                  <button>Update Info</button>
                </div>
              </div>
              <div className="flex flex-col p-3 gap-3 border-t-2 border-gray-400">
                <div className="flex justify-between">
                  <span className="text-white text-sm font-bold">
                    Upload image:
                  </span>
                  <input type="file" className="text-xs min-w-[400px]" />
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600 text=xs font-bold">
                    Only GIF's-max 300*300/60k
                  </span>
                  <button>Submit</button>
                </div>
              </div>
              <div className="flex flex-col border-t-2 border-gray-400 p-3 gap-5">
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-white">
                    YouTube Video
                  </span>
                  <input
                    placeholder="example: www.youtube.com/watch?v=abcdef"
                    className="min-w-[400px] text-xs px-1"
                  />
                </div>
                <div className="flex">
                  <span className="text-sm text-white font-bold min-w-[250px]">
                    Enable Youtube on your profile
                  </span>
                  <input type="checkbox" className="ml-5" />
                </div>
                <div className="flex">
                  <span className="text-sm text-white font-bold min-w-[250px]">
                    Enable autostart of Youtube videos
                  </span>
                  <input type="checkbox" className="ml-5" />
                </div>
                <button className="mx-auto">submit</button>
              </div>
              <div className="flex gap-4 p-3 border-t-2 border-gray-400">
                <span className="text-white text-sm font-bold">
                  Change your character type
                </span>
                <select className="text-sm rounded">
                  <option>Navyseal</option>
                  <option>Soldier</option>
                </select>
                <button className="ml-auto">submit</button>
              </div>
              <div className="flex flex-col p-3 gap-3 border-t-2 border-gray-400">
                <div className="flex justify-between">
                  <span className="text-white text-sm font-bold min-w-[200px]">
                    Old password:
                  </span>
                  <input className="flex-1 ml-5" />
                </div>

                <div className="flex justify-between">
                  <span className="text-white text-sm font-bold min-w-[200px]">
                    New password:
                  </span>
                  <input className="flex-1 ml-5" />
                </div>

                <div className="flex justify-between">
                  <span className="text-white text-sm font-bold min-w-[200px]">
                    Confirm password:
                  </span>
                  <input className="flex-1 ml-5" />
                </div>
                <button className="ml-auto">update</button>

                <div className="flex">
                  <span className="text-white text-sm font-bold">
                    Your current E-mail is:
                  </span>
                  <span className="text-white text-sm font-bold ml-5">
                    floria428@gmail.com
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white text-sm font-bold">
                    Change E-mail:
                  </span>
                  <input className="flex=1 ml-5" />
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600 font-bold text-sm">
                    An account activation Email is sent
                  </span>
                  <button>submit</button>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-3 border-t-2 border-gray-400">
                <div className="flex">
                  <span className="text-white text-sm font-bold">
                    Your current Name is:
                  </span>
                  <span className="text-white text-sm font-bold ml-5">
                    sealife1124
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white text-sm font-bold">
                    Change your current name:
                  </span>
                  <input className="flex-1 ml-5" />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-red-600 font-bold">
                    You can change your name only on the first day of a round
                  </span>
                  <button>submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-xs text-black mt-4">
        Copyright © 2005-2006 CombatGrounds.com. All rights reserved.
      </p>
      <p className="font-bold text-xs text-black mb-5 underline cursor-pointer">
        Contact us
      </p>
    </div>
  );
};
