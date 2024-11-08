import React, { useState } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css";
import { useSelector } from "react-redux";

export const CrewBank = () => {
  const user = useSelector(({ user }) => user.user);
  const [deposit, setDeposit] = useState(0);
  const depositMax = user ? user.money * 0.4: 0;
  const handleDepositMax = () => {

  }
  const handleDeposit = () => {

  }
  return (
    <CrewLayout title="Crew Bank">
      <div className="flex flex-col w-full">
        <div className="text-white border-[1px] border-secondary-green rounded-md mx-2 mt-2 h-[300px]">
          <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[50%] py-2">Total cash in the crew bank:</div>
            <div className="w-[50%] py-2">$ 2,040,857,326</div>
          </div>
          <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[50%] py-2">Cash on Hand: </div>
            <div className="w-[50%] py-2">$ {user && Number(depositMax).toLocaleString()}</div>
          </div>
          <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[50%] py-2">Deposits left today: </div>
            <div className="w-[50%] py-2">0</div>
          </div>

          <div className="flex w-full text-center font-bold text-lg text-yellow-200 underline border-b-[1px] border-secondary-green">
            <div className="w-full py-2"> ACTION</div>
          </div>

          <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[40%] py-2">Maximum deposit: </div>
            <div className="w-[40%] py-2">$ {user && (user.money * 0.4).toLocaleString()}</div>
            <div className="w-[20%] py-2">
              <button onClick={handleDepositMax} className="w-[100px] rounded-lg border-2 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white ">Deposit Max!</button>
            </div>
          </div>

          <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[40%] py-2">Deposit amount: </div>
            <div className="w-[40%] py-2">
              ${" "}
              <input className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm text-white px-1 text-sm py-[1px]" value={deposit} onChange={(ev) => setDeposit(ev.target.value)} />
            </div>
            <div className="w-[20%] py-2">
              <button onClick={handleDeposit} className="w-[100px] rounded-lg border-2 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white">Deposit</button>
            </div>
          </div>
          <div className="text-center mt-2 text-[red]">
            <b>WARNING: Money deposited in the crew bank cannot be withdrawn!</b>
          </div>
        </div>
      </div>
    </CrewLayout>
  );
};
