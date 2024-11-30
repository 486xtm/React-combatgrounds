import React, { useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import { useDispatch, useSelector } from "react-redux";
import { attackBoss, getBosses } from "../../../api/crew";
import { socket } from "../../../socket/socket";
import { useNavigate } from "react-router-dom";

export const CrewBosses = () => {
  const bosses = useSelector(({ crew }) => crew.bosses);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAttack = (boss_id) => {
    attackBoss({ boss_id }, dispatch, socket, navigate);
  };

  useEffect(() => {
    getBosses(dispatch);
  }, []);

  return (
    <CrewLayout title="Bosses">
      <div className="w-full relative h-[300px]">
        <div className="text-white border-[1px] border-secondary-green rounded-md mx-2 mt-2 h-[320px]">
          <div className="flex w-full text-center font-medium text-yellow-200 border-b-[1px] border-secondary-green ">
            <div className="w-[50%] py-1">Boss Name</div>
            <div className="w-[30%] py-1">Damage range</div>
            <div className="w-[20%] py-1">Attack</div>
          </div>
          <div className="h-[280px] overflow-y-auto">
            {bosses &&
              bosses.map((boss, index) => (
                <div
                  className={`flex w-full text-center border-secondary-green ${
                    index < bosses.length - 1 && "border-b-[1px]"
                  } `}
                  key={`crew_bosses_${index}`}
                >
                  <div className=" py-[0.24px] w-[50%]">{boss.name}</div>
                  <div className=" py-[0.24px] w-[30%] text-red-500">
                    {Number(boss.damage).toLocaleString("en-US")}
                  </div>
                  {!boss.isAttacked ? (
                    <div
                      className=" py-[0.24px] underline w-[20%] text-yellow-300 text-center cursor-pointer hover:text-white"
                      onClick={() => handleAttack(boss._id)}
                    >
                      Attack
                    </div>
                  ) : (
                    <div className=" py-[0.24px] w-[20%] text-gray-300 text-center cursor-pointer">
                      Attacked
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="w-[65%] text-center text-sm leading-1 mt-1">
          Your crew will join and help you attack the boss. <br />
        </div>

        <div className="text-[red] font-bold text-md absolute right-4 top-0 -mt-9">
          It costs $2,000,000,000 to start the raid.
        </div>
      </div>
    </CrewLayout>
  );
};
