import React, { useEffect, useState } from "react";
import CrewLayout from "../layout/crew_layout";
import { useDispatch, useSelector } from "react-redux";
import { deposit, getCrew } from "../../../api/crew";
import { setToast } from "../../../redux/toastSlice";

export const CrewBank = () => {
  const user = useSelector(({ user }) => user.user);
  const [amount, setAmount] = useState(0);
  const depositMax = user ? Math.floor(user.money * 0.3) : 0;
  const crew = useSelector(({ crew }) => crew.crew);

  const dispatch = useDispatch();

  const handleDepositMax = () => {
    setAmount(depositMax);
  };

  const handleDeposit = () => {
    if (depositMax < Number(amount)) {
      dispatch(setToast({ type: "error", msg: "Too much for deposit" }));
      return;
    }
    deposit({ amount }, dispatch);
    setAmount(0);
  };

  useEffect(() => {
    getCrew(dispatch);
  }, []);

  return (
    <CrewLayout title="Crew Bank">
      <div className="flex flex-col w-full">
        <div className="text-white border-[1px] border-secondary-green rounded-md mx-2 mt-2 h-[300px]">
          <div className="flex w-full px-5 font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[40%] py-2">Total cash in the crew bank:</div>
            <div className="w-[60%] py-2">
              $ {((crew && crew.money) || 0).toLocaleString("en-US")}
            </div>
          </div>
          <div className="flex w-full px-5 font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[40%] py-2">Cash on Hand: </div>
            <div className="w-[60%] py-2">
              $ {user && Number(user.money).toLocaleString()}
            </div>
          </div>
          <div className="flex w-full px-5 font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[40%] py-2">Deposits left today: </div>
            <div className="w-[60%] py-2">
              {(crew && crew.countDeposit) || 0}
            </div>
          </div>

          <div className="flex w-full px-5 font-bold text-lg text-yellow-200 underline border-b-[1px] border-secondary-green">
            <div className="w-full py-2 text-right pr-[35px]"> ACTION</div>
          </div>

          <div className="flex w-full px-5 font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[40%] py-2">Maximum deposit: </div>
            <div className="w-[40%] text-left py-2">
              $ {(depositMax || 0).toLocaleString()}
            </div>
            <div className="w-[20%] py-2">
              <button
                onClick={handleDepositMax}
                className="w-[100px] rounded-lg border-2 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white "
              >
                Deposit Max!
              </button>
            </div>
          </div>

          <div className="flex w-full px-5 font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[40%] py-2">Deposit amount: </div>
            <div className="w-[40%] py-2">
              ${" "}
              <input
                className="bg-transparent border-secondary-green shadow-inner shadow-[rgba(255,255,255,0.3)] border-[1px] rounded-sm px-1 text-sm py-[1px] text-yellow-200"
                value={amount ? Number(amount).toLocaleString("en-US") : ""}
                onChange={(e) =>
                  setAmount(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </div>
            <div className="w-[20%] py-2">
              <button
                onClick={handleDeposit}
                className="w-[100px] rounded-lg border-2 border-yellow-200 bg-transparent shadow-glow_small hover:shadow-white"
              >
                Deposit
              </button>
            </div>
          </div>
          <div className="text-center mt-2 text-[red]">
            <b>
              WARNING: Money deposited in the crew bank cannot be withdrawn!
            </b>
          </div>
        </div>
      </div>
    </CrewLayout>
  );
};
