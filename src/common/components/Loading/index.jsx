import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Loading = () => {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length >= 15) {
          return prevDots;
        }
        return prevDots + '.  ';
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={
        "flex flex-col items-center bg-black " + styles["back"]
      }
    >
      <div className="w-[880px]">
        <img src="images/index_r1_c1.jpg" width="880" height="165" alt="" />
      </div>

      <div className="w-[880px] items-center flex-col flex bg-black border-4 border-[#81843C] h-[684px]">
        <div className="w-1/2 my-10">
          <div className="text-white font-bold text-2xl mb-16">
            Processing Login {dots}
          </div>
          <div className="text-red-600 text-sm">
            <b className="underline decoration-red-600">WARNING</b> <br/>
            By entering this site you accept and agree to abide by the GAME
            RULES. You Can read the GAME RULES by clicking <b className="underline decoration-red-600">HERE </b>.
            <br/>
            <br/>
            <b>Multiple Accounts :</b> Having more than 1 account is strictly 
            against the game rules. Players who are found using more than one
            account will be suspended for cheating.<br/>
            <b>Shared Computers:</b> If someone else plays from your computer,
            that is at your OWN RISK. You may get banned for Multiple
            accounts.
          </div>
        </div>
      </div>

      <footer className="text-center">
        <b>Copyright © 2005-2006 CombatGrounds.com. All rights reserved.</b>
        <br />
        <a
          className="underline decoration-white hover:decoration-yellow-400"
          href="mailto:info@combatgrounds.com"
        >
          Contact us.
        </a>
      </footer>
    </div>
  );
}

export default Loading;