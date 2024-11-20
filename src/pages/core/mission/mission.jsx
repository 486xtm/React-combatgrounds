import React from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
export const Mission = () => {
  const handleAcceptMission = () => {};
  const handleDenyMission = () => {};
  return (
    <Layout isHeaderFull>
      <div className="flex-1">
        <div
          className={
            "text-white mx-auto px-10 text-center font-medium relative" +
            " " +
            styles["mission-container"]
          }
        >
          The mission is to retrieve and destroy the supply of a genetically
          created virus, with the potential to wipe out an entire city in less
          than 72 hours. You must contest with a gang of international
          terrorists who has already managed to steal the cure and now need a
          sample of the disease to complete their plan of infecting the whole
          world.<span className="font-[700]"> Do you accept?</span>
          <div className="flex w-full justify-between absolute bottom-10 px-10">
            <button
              className="text-[red] bg-transparent border-[4px] rounded-lg text-md w-[80px] py-1 hover:shadow-glow hover:shadow-[red] font-bold border-[red]"
              onClick={handleAcceptMission}
            >
              A C C E P T
            </button>
            <button
              className="text-blue-500 bg-transparent border-[4px] rounded-lg text-md w-[80px] py-1 hover:shadow-glow hover:shadow-blue-500 font-bold border-blue-500"
              onClick={handleDenyMission}
            >
              D E N Y
            </button>
          </div>
        </div>
        <div className="text-[yellow] text-center my-5 font-bold">
          This option takes 20 turns
        </div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col w-[280px]">
            <div className="text-dark-secondary border border-gray-100 text-sm text-center font-bold py-1">
              PLAYER SKILLS
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-primary px-2">
                CAttack proficiency
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold px-2">0</div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-dark-primary px-2">
                Defense proficiency
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold px-2">
                5
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-primary px-2">
                Recruits motivation
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold px-2">0</div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-dark-primary px-2">
                Raise funds ability
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold px-2">
                5
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-primary px-2">
                Power vision
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold px-2">5</div>
            </div>
          </div>
          <div className="w-[280px] text-white">If you complete a mission successfully, you are rewarded a great skill that makes your character perform better. You get to keep a skill for one hour.</div>
        </div>
      </div>
    </Layout>
  );
};
