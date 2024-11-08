import React from "react";
import CrewLayout from "../layout/crew_layout";
const mockdata = [
  {
    name: "Infantry Officer",
    damage: 9000,
    status: true,
  },
  {
    name: "Special Forces Officer",
    damage: 750000,
    status: true,
  },
  {
    name: "Avionics Technician",
    damage: 985000,
    status: true,
  },
  {
    name: "Aircraft Mechanic",
    damage: 1250000,
    status: true,
  },
  {
    name: "Communications Equipment Operator",
    damage: 2002100,
    status: true,
  },
  {
    name: "Intelligence Officer",
    damage: 3100130,
    status: true,
  },
  {
    name: "Recruiting Specialist",
    damage: 4145601,
    status: true,
  },
  {
    name: "Flight Engineers",
    damage: 5013583,
    status: true,
  },
  {
    name: "Seamen",
    damage: 9001287,
    status: true,
  },
  {
    name: "Religious Program Specialist",
    damage: 10002901,
    status: true,
  },
  {
    name: "CombatGrounds Terrorist",
    damage: 20003501,
    status: false,
  },
];
export const CrewBosses = () => {
  const handleAttack = (data) => {
    console.log(data);
  };
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
            {mockdata &&
              mockdata.map((data, index) => (
                <div
                  className={`flex w-full text-center border-secondary-green ${
                    index < mockdata.length - 1 && "border-b-[1px]"
                  } `}
                  key={`crew_bosses_${index}`}
                >
                  <div className=" py-[0.24px] w-[50%]">{data.name}</div>
                  <div className=" py-[0.24px] w-[30%] text-red-500">
                    {Number(data.damage).toLocaleString()}
                  </div>
                  {data.status ? (
                    <div
                      className=" py-[0.24px] underline w-[20%] text-yellow-300 text-center cursor-pointer hover:text-white"
                      onClick={() => handleAttack(data)}
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
          <span className="text-[red]">It costs $2,000,000,000 to start the raid.</span>
        </div>
      </div>
    </CrewLayout>
  );
};
