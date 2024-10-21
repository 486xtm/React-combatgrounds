import React from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";
import { Link } from "react-router-dom";

export const HeadQuarter = () => {
  return (
    <Layout currentActiveTab={"headquarters"}>
      <div className="flex-1 flex flex-col">
        <Link to="/news">
          <p className="text-xl underline text-white font-bold text-center my-5">
            Click here for News
          </p>
        </Link>
        <p className="text-secondary text-center font-bold text-sm">
          Round 713 ends in: 6 days, 8 hours, 48 minutes and 15 seconds.
        </p>
        <p className="text-secondary text-center font-bold text-sm">
          Cash Bounty at: $27
        </p>
        <p className="text-secondary text-center text-yellow-200 text-tiny mt-3">
          You get turns, money and recruits every 10 minutes as long as you have
          less than 1500 turns
        </p>

        <p className="text-secondary text-center text-white text-sm mt-3 font-bold">
          Minutes Left:
        </p>
        <div className="flex mx-auto">
          <img src="./images/0.gif" />
          <img src="./images/6.gif" />
        </div>
        <div className="flex gap-[100px] justify-center">
          <div className="flex flex-col w-[280px]">
            <div className="text-dark-secondary border border-gray-100 text-sm text-center font-bold py-1">
              CYCLE STATS (10 minutes)
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-primary">
                Cash next cycle
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                $1,494,842
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-dark-primary">
                Soldiers per cycle
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold">
                5
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[60%] border border-gray-100 bg-primary">
                Turns per cycle
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                15
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[280px]">
            <div className="text-dark-secondary border border-gray-100 text-sm text-center font-bold py-1">
              ATTACK SUMMARY
            </div>
            <div className="flex w-full">
              <div className="text-white w-[90%] border border-gray-100 bg-primary">
                Attacks won
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                1
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[90%] border border-gray-100 bg-dark-primary">
                Attacks lost
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold">
                5
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[90%] border border-gray-100 bg-primary">
                Successful defends
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                15
              </div>
            </div>
            <div className="flex w-full">
              <div className="text-white w-[90%] border border-gray-100 bg-dark-primary">
                Unsuccessful defends
              </div>
              <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold">
                15
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
