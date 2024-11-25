import React, { useState } from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { training } from "../../../api/training";

export const Training = () => {
  const [cash1, setCash1] = useState(0);
  const [cash2, setCash2] = useState(0);
  const [cash3, setCash3] = useState(0);
  const [cash4, setCash4] = useState(0);

  const dispatch = useDispatch();

  const user = useSelector(({ user }) => user.user);

  const handleTraning = () => {
    training({ cash1, cash2, cash3, cash4 }, dispatch);
  };

  return (
    <Layout>
      <div className="flex flex-col flex-1 gap-2">
        <img
          width="450"
          height="100"
          src="/pics/boot.gif"
          className="mx-auto"
        />
        <p className="text-center text-sm text-[red] font-bold">
          {/* Invalid amount of money! */}
        </p>
        <div className={styles["training-layout"]}>
          <div className="flex justify-between">
            <div className="flex">
              <span className="text-white">$</span>
              <input
                className="rounded text-sx w-[100px]"
                value={Number(cash1).toLocaleString("en-US")}
                onChange={(e) =>
                  setCash1(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </div>
            <div className="flex">
              <span className="text-white">$</span>
              <input
                className="rounded text-sx w-[100px]"
                value={Number(cash2).toLocaleString("en-US")}
                onChange={(e) =>
                  setCash2(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <span className="text-white">$</span>
              <input
                className="rounded text-sx w-[100px]"
                value={Number(cash3).toLocaleString("en-US")}
                onChange={(e) =>
                  setCash3(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </div>
            <div className="flex">
              <span className="text-white">$</span>
              <input
                className="rounded text-sx w-[100px]"
                value={Number(cash4).toLocaleString("en-US")}
                onChange={(e) =>
                  setCash4(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </div>
          </div>
        </div>
        <p className="text-white text-sm mx-[150px]">
          To keep your troops ready for the battle, you always need to train
          them. The number of recruits who receive the training increases with
          the amount of money you pay.
        </p>
        <button
          className="bg-black border border-white mx-auto text-white px-2 hover:border-gray-500"
          onClick={handleTraning}
        >
          Perform training
        </button>
        <div className="flex flex-col mx-[150px]">
          <p className="text-white text-sm">
            Physical training level:{" "}
            <span className="text-secondary">{user && user.str1}%</span>
          </p>
          <p className="text-white text-sm">
            Combat training level:{" "}
            <span className="text-secondary">{user && user.str2}%</span>
          </p>
          <p className="text-white text-sm">
            Weapon training level:{" "}
            <span className="text-secondary">{user && user.str3}%</span>
          </p>
          <p className="text-white text-sm">
            Special operations training level:{" "}
            <span className="text-secondary">{user && user.str4}%</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};
