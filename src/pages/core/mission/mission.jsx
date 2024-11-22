import React, { useEffect } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
import { acceptMission, getMission } from "../../../api/mission";
import { useDispatch, useSelector } from "react-redux";
export const Mission = () => {
  const dispatch = useDispatch();

  const mission = useSelector(({ user }) => user.mission);
  const user = useSelector(({ user }) => user.user);

  const handleAcceptMission = () => {
    if (!mission._id) return;
    acceptMission({ mission_id: mission._id }, dispatch);
  };
  const handleDenyMission = () => {
    getMission(dispatch);
  };

  useEffect(() => {
    setTimeout(() => getMission(dispatch), 3000);
  }, []);

  return (
    <Layout isHeaderFull>
      <div className="flex-1 mt-5">
        <div
          className={
            "text-white mx-auto px-10 text-center font-medium relative" +
            " " +
            styles["mission-container"]
          }
        >
          <p className="text-xxl font-bold text-dark-secondary">
            {mission && mission.name}
          </p>
          {mission && mission.overview}
          {mission && <span className="font-[700]"> Do you accept?</span>}
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
                Attack proficiency
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold px-2">
                {(user && user.ab1) || 0}
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-dark-primary px-2">
                Defense proficiency
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold px-2">
                {(user && user.ab2) || 0}
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-primary px-2">
                Recruits motivation
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold px-2">
                {(user && user.ab3) || 0}
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-dark-primary px-2">
                Raise funds ability
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold px-2">
                {(user && user.ab4) || 0}
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-primary px-2">
                Power vision
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold px-2">
                {(user && user.ab5) || 0}
              </div>
            </div>
          </div>
          <div className="w-[280px] text-white">
            If you complete a mission successfully, you are rewarded a great
            skill that makes your character perform better. You get to keep a
            skill for one hour.
          </div>
        </div>
      </div>
    </Layout>
  );
};
