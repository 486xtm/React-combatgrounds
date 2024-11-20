import React from "react";
import { Layout } from "../../../common/components";
import { useDispatch } from "react-redux";
import { homeleave } from "../../../api/training";

export const HomeLeave = () => {
  const [cash, setCash] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    homeleave({ cash }, dispatch);
  };

  return (
    <Layout>
      <div className="flex flex-col flex-1 items-center">
        <img width="500" height="100" src="pics/homelve.jpg" />
        <p className="text-center text-white font-bold text-sm">
          Let your troops have some rest so they can come back stronger!
        </p>
        <div className="flex gap-3 mt-5 py-5">
          <p className="text-white text-sm">$ Money cost:</p>
          <input
            className="text-white bg-black text-sm px-2 w-[100px] border border-white hover:boder-gray-500 rounded"
            onChange={(e) => IoSwapVerticalSharp(e.target.value)}
          />
          <button onClick={handleClick}>Go on Home Leave</button>
        </div>
        <p className="text-white text-sm">
          Rest level: <span className="text-secondary">100%</span>
        </p>
      </div>
    </Layout>
  );
};
