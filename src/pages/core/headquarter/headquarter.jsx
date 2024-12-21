import React, { useEffect } from "react";
import { Header, Layout, Menu } from "../../../common/components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRound } from "../../../api/headquarter";

export const HeadQuarter = React.memo(() => {
  const user = useSelector(({ user }) => user.user);
  const round = useSelector(({ round }) => round.info);

  const dispatch = useDispatch();

  useEffect(() => {
    getRound(dispatch);
  }, []);

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
            {`Round ${round.id} ends in: ${round.remain}`}
          </p>
          <p className="text-secondary text-center font-bold text-sm">
            Cash Bounty at: $27
          </p>
          <p className="text-secondary text-center text-tiny mt-3">
            You get turns, money and recruits every 10 minutes as long as you
            have less than {user && Number(user.role) > 0 ? "2,000" : "1,500"}{" "}
            turns
          </p>

          <p className="text-center text-white text-sm mt-3 font-bold">
            Minutes Left:
          </p>
          <div className="flex mx-auto">
            <img src={`/images/${round.time === 10 ? 1 : 0}.gif`} />
            <img src={`/images/${round.time % 10}.gif`} />
          </div>
          <div className="flex gap-[100px] justify-center">
            <div className="flex flex-col w-[280px]">
              <div className="text-dark-secondary border border-gray-100 text-sm text-center font-bold py-1">
                CYCLE STATS (10 minutes)
              </div>
              <div className="flex w-full">
                <div className="text-white w-[60%] border border-gray-100 bg-primary px-2">
                  Cash next cycle
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold px-2">
                  ${user && user.cycleRewards.toLocaleString("en-US")}
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-white w-[60%] border border-gray-100 bg-dark-primary px-2">
                  Soldiers per cycle
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold px-2">
                  5
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-white w-[60%] border border-gray-100 bg-primary px-2">
                  Turns per cycle
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold px-2">
                  {user && user.role ? 25 : 15}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[280px]">
              <div className="text-dark-secondary border border-gray-100 text-sm text-center font-bold py-1 ">
                ATTACK SUMMARY
              </div>
              <div className="flex w-full">
                <div className="text-white w-[90%] border border-gray-100 bg-primary px-2">
                  Attacks won
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold text-center">
                  0
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-white w-[90%] border border-gray-100 bg-dark-primary px-2">
                  Attacks lost
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold text-center">
                  0
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-white w-[90%] border border-gray-100 bg-primary px-2">
                  Successful defends
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-primary font-bold text-center">
                  0
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-white w-[90%] border border-gray-100 bg-dark-primary px-2">
                  Unsuccessful defends
                </div>
                <div className="text-white border border-gray-100 text-sm flex-1 bg-dark-primary font-bold text-center">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
});
