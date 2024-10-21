import React from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";

export const StatMisc = () => {
  return (
    <Layout currentActiveTab={"rankings"}>
      <div className="flex-1 flex flex-col mx-[40px] py-3 gap-4">
        <div className="flex">
          <div className="flex flex-col flex-1 gap-1">
            <p className="ml-[200px] text-red-600 text-sm font-bold">
              Attack won
            </p>
            {[
              10, 25, 33, 42, 51, 60, 71, 80, 91, 102, 114, 120, 160, 200, 300,
              400, 550, 551, 552, 552, 567, 568, 569, 600, 604,
            ].map((i, id) => {
              return (
                <div className="flex" key={id}>
                  <p className="w-[200px] text-secondary text-sm">
                    <span className="text-white">{id + 1}. </span>
                    Player
                    {id}
                  </p>
                  <p className="text-white text-sm">{835 - i}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <p className="ml-[200px] text-red-600 text-sm font-bold">
              Attack defended
            </p>
            {[
              10, 25, 33, 42, 51, 60, 71, 80, 91, 102, 114, 120, 160, 200, 300,
              400, 550, 551, 552, 552, 567, 568, 569, 600, 604,
            ].map((i, id) => {
              return (
                <div className="flex" key={id}>
                  <p className="w-[200px] text-secondary text-sm">
                    <span className="text-white">{id + 1}. </span>
                    Player
                    {id}
                  </p>
                  <p className="text-white text-sm">{835 - i}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col flex-1 gap-1">
            <p className="ml-[200px] text-red-600 text-sm font-bold">Power</p>
            {[
              10, 25, 33, 42, 51, 60, 71, 80, 91, 102, 114, 120, 160, 200, 300,
              400, 550, 551, 552, 552, 567, 568, 569, 600, 604,
            ].map((i, id) => {
              return (
                <div className="flex" key={id}>
                  <p className="w-[200px] text-secondary text-sm">
                    <span className="text-white">{id + 1}. </span>
                    Player
                    {id}
                  </p>
                  <p className="text-white text-sm">{835 - i}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <p className="ml-[200px] text-red-600 text-sm font-bold">Level</p>
            {[
              10, 25, 33, 42, 51, 60, 71, 80, 91, 102, 114, 120, 160, 200, 300,
              400, 550, 551, 552, 552, 567, 568, 569, 600, 604,
            ].map((i, id) => {
              return (
                <div className="flex" key={id}>
                  <p className="w-[200px] text-secondary text-sm">
                    <span className="text-white">{id + 1}. </span>
                    Player
                    {id}
                  </p>
                  <p className="text-white text-sm">{835 - i}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
