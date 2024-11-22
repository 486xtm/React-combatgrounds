import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../../api/user";

export const StatMisc = () => {
  const dispatch = useDispatch();
  const stats = useSelector(({ user }) => user.stats);

  useEffect(() => {
    getStats(dispatch);
  }, []);

  return (
    <Layout currentActiveTab={"rankings"}>
      {stats && (
        <div className="flex-1 flex flex-col mx-[40px] py-3 gap-4">
          <div className="flex">
            <div className="flex flex-col flex-1 gap-1">
              <p className="ml-[200px] text-[red] text-sm font-bold">
                Attack won
              </p>
              {stats.att_wins.map((i, id) => {
                return (
                  <div className="flex" key={id}>
                    <p className="w-[200px] text-secondary text-sm">
                      <span className="text-white">{id + 1}. </span>
                      {i.name}
                    </p>
                    <p className="text-white text-sm">{i.att_win || 0}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p className="ml-[200px] text-[red] text-sm font-bold">
                Attack defended
              </p>
              {stats.def_wins.map((i, id) => {
                return (
                  <div className="flex" key={id}>
                    <p className="w-[200px] text-secondary text-sm">
                      <span className="text-white">{id + 1}. </span>
                      {i.name}
                    </p>
                    <p className="text-white text-sm">{i.def_win || 0}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col flex-1 gap-1">
              <p className="ml-[200px] text-[red] text-sm font-bold">Power</p>
              {stats.dmgs.map((i, id) => {
                return (
                  <div className="flex" key={id}>
                    <p className="w-[200px] text-secondary text-sm">
                      <span className="text-white">{id + 1}. </span>
                      {i.name}
                    </p>
                    <p className="text-white text-sm">{i.damage || 0}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p className="ml-[200px] text-[red] text-sm font-bold">Level</p>
              {stats.levels.map((i, id) => {
                return (
                  <div className="flex" key={id}>
                    <p className="w-[200px] text-secondary text-sm">
                      <span className="text-white">{id + 1}. </span>
                      {i.name}
                    </p>
                    <p className="text-white text-sm">{i.level || 0}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
