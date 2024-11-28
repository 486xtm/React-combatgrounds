import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Loading = () => {
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prevLoading) => prevLoading + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const generate_arr = (len) => {
    return Array(len).fill(0);
  };
  return (
    <div
      className={
        "flex flex-col justify-center items-center bg-black " + styles["back"]
      }
    >
      <div className="md:w-[800px] w-[350px]  md:mb-5 mb-3 md:-mt-32 -mt-20">
        <img src="/pictures/common/mark.svg" className="w-full h-auto" alt="" />
      </div>
      <div className="flex md:mb-5 mb-2">
        <div className="flex">
          {generate_arr(loading).map((val, index) => (
            <div className="md:w-[56px] w-[28px]" key = {"loading1_" + index}>
              <img src="/pictures/common/bullet_f.svg" />
            </div>
          ))}
        </div>
        <div className="flex">
          {generate_arr(5 - loading).map((val, index) => (
            <div className="md:w-[56px] w-[28px]" key = {"loading2_" + index} >
            <img  src="/pictures/common/bullet.svg" />
            </div>
          ))}
        </div>
      </div>
      <div className="font-[400] md:text-[20px] text-[10px] leading-[24px] text-[#F2F2EC]">
        LOADING . . .
      </div>

      {/* <div className="w-[880px] items-center flex-col flex bg-black border-4 border-[#81843C] h-[684px]">
        <div className="w-1/2 my-10">
          <div className="text-white font-bold text-2xl mb-16">
            Processing Login {dots}
          </div>
          <div className="text-[red] text-sm">
            <b className="underline decoration-[red]">WARNING</b> <br />
            By entering this site you accept and agree to abide by the GAME
            RULES. You Can read the GAME RULES by clicking{" "}
            <b className="underline decoration-[red]">HERE </b>.
            <br />
            <br />
            <b>Multiple Accounts :</b> Having more than 1 account is strictly
            against the game rules. Players who are found using more than one
            account will be suspended for cheating.
            <br />
            <b>Shared Computers:</b> If someone else plays from your computer,
            that is at your OWN RISK. You may get banned for Multiple accounts.
          </div>
        </div>
      </div>

      <footer className="text-center">
        <b>Copyright © 2024-2025 CombatGrounds.com. All rights reserved.</b>
        <br />
        <a
          className="underline decoration-white hover:decoration-yellow-400"
          href="mailto:info@combatgrounds.com"
        >
          Contact us.
        </a>
      </footer> */}
    </div>
  );
};

export default Loading;
