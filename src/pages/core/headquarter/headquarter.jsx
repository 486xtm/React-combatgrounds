import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRound } from "../../../api/headquarter";
import moment from "moment";

export const HeadQuarter = () => {
  const user = useSelector(({ user }) => user.user);
  const round = useSelector(({ round }) => round.info);

  const dispatch = useDispatch();

  useEffect(() => {
    getRound(dispatch);
  }, []);

  useEffect(() => {
    console.log(
      "time===>",
      moment(round.updatedAt).format("MMMM Do, YYYY, h:mm A"),
      moment().format("MMMM Do, YYYY, h:mm A"),
      10 - moment().diff(round.updatedAt, "minutes")
    );
  }, [round]);

  return (
    <Layout currentActiveTab={"headquarters"}>
      {round && (
        <div className="flex-1 flex flex-col">
          <Link to="https://discord.com/channels/1040013836566138992/1265903715068543007">
            <p className="text-xl underline text-white font-bold text-center my-5">
              Click here for News
            </p>
          </Link>
          <p className="text-secondary text-center font-bold text-sm">
            {`Round ${round.id} ends in: ${moment(round.deadline).format(
              "MMMM Do, YYYY, h:mm A"
            )}`}
          </p>
          <p className="text-secondary text-center font-bold text-sm">
            Cash Bounty at: $27
          </p>
          <p className="text-secondary text-center text-yellow-200 text-tiny mt-3">
            You get turns, money and recruits every 10 minutes as long as you
            have less than 1500 turns
          </p>

          <p className="text-secondary text-center text-white text-sm mt-3 font-bold">
            Minutes Left:
          </p>
          <div className="flex mx-auto">
            <img
              src={`/images/${
                moment().diff(round.updatedAt, "minutes") === 0 ? 1 : 0
              }.gif`}
            />
            <img
              src={`/images/${
                (10 - moment().diff(round.updatedAt, "minutes")) % 10
              }.gif`}
            />
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
                  ${user && user.cycleRewards}
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
                  0
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-white w-[90%] border border-gray-100 bg-dark-primary">
                  Attacks lost
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold">
                  0
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-white w-[90%] border border-gray-100 bg-primary">
                  Successful defends
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold">
                  0
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-white w-[90%] border border-gray-100 bg-dark-primary">
                  Unsuccessful defends
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
