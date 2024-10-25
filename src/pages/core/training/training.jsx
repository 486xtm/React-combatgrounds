import React from "react";
import { Layout } from "../../../common/components";
import styles from "./styles.module.css";

export const Training = () => {
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
          Invalid amount of money!
        </p>
        <div className={styles["training-layout"]}>
          <div className="flex justify-between">
            <div className="flex">
              <span className="text-white">$</span>
              <input className="rounded text-sx w-[100px]" />
            </div>
            <div className="flex">
              <span className="text-white">$</span>
              <input className="rounded text-sx w-[100px]" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <span className="text-white">$</span>
              <input className="rounded text-sx w-[100px]" />
            </div>
            <div className="flex">
              <span className="text-white">$</span>
              <input className="rounded text-sx w-[100px]" />
            </div>
          </div>
        </div>
        <p className="text-white text-sm mx-[150px]">
          To keep your troops ready for the battle, you always need to train
          them. The number of recruits who receive the training increases with
          the amount of money you pay.
        </p>
        <button className="bg-black border border-white mx-auto text-white px-2 hover:border-gray-500">
          Perform training
        </button>
        <div className="flex flex-col mx-[150px]">
          <p className="text-white text-sm">
            Physical training level: <span className="text-secondary">50%</span>
          </p>
          <p className="text-white text-sm">
            Combat training level: <span className="text-secondary">50%</span>
          </p>
          <p className="text-white text-sm">
            Weapon training level: <span className="text-secondary">50%</span>
          </p>
          <p className="text-white text-sm">
            Special operations training level:{" "}
            <span className="text-secondary">50%</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};
