import React from "react";
import { Layout } from "../../../common/components";

export const BattleField = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <img
          border="0"
          src="pics/battle.gif"
          width="400"
          height="50"
          className="ml-auto my-5"
        />
        <p className="text-xs text-white mx-5">
          As everything goes in life, the rewards depend on how much risk is
          involved.
        </p>
        <p className="text-xs text-white mx-5">
          We designed two types of battlefields to satisfy everyone's need.
        </p>
        <p className="text-xs text-white mx-5">
          If you are audacious and do not fear to lose a great portion of your
          troops, you can choose the High-Risks/High-Rewards battlefield. Of
          course, you would get way more troops and cash when you exploit and
          recruit in battlefield.
        </p>
        <p className="text-xs text-white mx-5">
          On the other hand if you are the conservative type, you should pick
          the Low-Risks/Low-Rewards battlefield; you would get less troops and
          cash when you exploit and recruit in battlefield, but you won't lose
          lots of recruits if someone challenges you.
        </p>
        <p className="text-xs text-white mx-5 my-5">
          Please choose one of the two options:
        </p>
        <div className="flex mx-5 gap-5 pl-5">
          <select className="rounded text-xs">
            <option>Low-Risk Battlefield</option>
            <option>High-Risk Battlefield</option>
          </select>
          <button>Submmit</button>
        </div>
      </div>
    </Layout>
  );
};
