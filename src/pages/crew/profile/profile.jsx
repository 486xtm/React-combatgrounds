import React, {useState, useEffect} from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css";

export const CrewProfile = () => {
  const [tab, setTab] = useState(1);

  return <CrewLayout title="Profile">
    <div className="flex flex-col w-full">
    <div className="absolute flex right-0 text-white font-bold gap-2 mr-10 -mt-8">
        <div
          className={`${tab == 0 && "text-yellow-200"} cursor-pointer`}
          onClick={() => setTab(0)}
        >
          Crew Info
        </div>
        <div
          className={`${tab == 1 && "text-yellow-200"} cursor-pointer`}
          onClick={() => setTab(1)}
        >
          Description
        </div>
      </div>
      <div
        className={` absolute right-0 rounded-lg h-[2px] bg-yellow-200 -mt-2 ${
          tab == 0 ? "mr-[130px] w-[85px]" : "mr-[35px] w-[95px]"
        } transition-all duration-200`}
      ></div>
    </div>
  </CrewLayout>
}