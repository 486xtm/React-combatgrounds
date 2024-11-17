import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRoundLog } from "../../../api/hof";
import { formattedDate, pagination } from "../../../common/utils";
import { ROUTES } from "../../../common/constant";

export const HallOfFame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [goRound, setGoRound] = useState("");
  const { roundId } = useParams();
  const hofData = useSelector(({ round }) => round.hofData);
  if(roundId < 1)
    navigate(ROUTES.MAIN_ROUTES.HEADQUARTER);
  useEffect(() => {
    getRoundLog({ roundId }, dispatch, navigate);
  }, [roundId]);

  return (
    <Layout currentActiveTab={"hall-of-fame"}>
      <div className="flex flex-col flex-1">
        <img src="/pics/halloffame.gif" alt="halloffame.gif" className="mx-3" />
        {hofData && !(Number(roundId || hofData.currentRound - 1) !==
              hofData.currentRound - 1) && <>
        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={3}>Combat Grounds Legends</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td> Name</td>
              <td>Points</td>
            </tr>

            {hofData &&
              hofData.legends &&
              hofData.legends.map((l, idx) => (
                <tr key={`legend_${idx}`}>
                  <td>{idx + 1}</td>
                  <td>{l.name}</td>
                  <td>{l.points}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={2}>All-Time Highest Net Worth</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Net Worth</td>
            </tr>
            <tr>
              <td>Black Rose</td>
              <td>117,688,630</td>
            </tr>
          </tbody>
        </table>

        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={2}>All-Time Highest Crew Networth</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Net Worth</td>
            </tr>
            <tr>
              <td>Swamp Ass</td>
              <td>367,529,832</td>
            </tr>
          </tbody>
        </table>
        </>}
        <p className="text-secondary text-xl text-center font-bold mt-5">
        Results for Round{" "}
          {hofData && roundId
            ? roundId
            : hofData
            ? hofData.currentRound - 1
            : 1}
        </p>
        {hofData && (
          <p className="text-secondary text-center text-sm font-bold mb-5">
            (From {formattedDate(new Date(hofData.round.createdAt))} to{" "}
            {formattedDate(new Date(hofData.round.deadline))})
          </p>
        )}

        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={5}>Top Supporters</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Net Worth</td>
              <td>Medals</td>
            </tr>
            {hofData &&
              hofData.round &&
              hofData.round.topSupporters.map((l, idx) => (
                <tr key={`top_supporter_${idx}`}>
                  <td>{idx + 1}</td>
                  <td>{l.player.name}</td>
                  <td>{Number(l.netWorth).toLocaleString()}</td>
                  <td>{l.medals.name}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={5}>Top Free Players</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Net Worth</td>
              <td>Medals</td>
              <td>Prize</td>
            </tr>
            {hofData &&
              hofData.round &&
              hofData.round.topFreePlayers.map((l, idx) => (
                <tr key={`top_free_${idx}`}>
                  <td>{idx + 1}</td>
                  <td>{l.player.name}</td>
                  <td>{Number(l.netWorth).toLocaleString()}</td>
                  <td>{l.medals.name}</td>
                  <td>{l.prize}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <table className={styles["custom-table"]}>
          <tbody>
            <tr>
              <td colSpan={6}>Top Crews</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Leader</td>
              <td>Net Worth</td>
              <td>Medals</td>
              <td>Prize</td>
            </tr>
            {hofData &&
              hofData.round &&
              hofData.round.topCrews.map((l, idx) => (
                <tr key={`top_crew_${idx}`}>
                  <td>{idx + 1}</td>
                  <td>{l.name}</td>
                  <td>{l.leader.name}</td>
                  <td>{Math.floor(Number(l.netWorth)).toLocaleString()}</td>
                  <td>{l.medals.name}</td>
                  <td>{l.prize}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex w-full justify-center gap-20 my-5 items-center">
          <p className="text-sm text-secondary">Go to Round:</p>
          <input
            className="w-[70px] rounded-lg -ml-[65px] px-2 text-center"
            onChange={(ev) => setGoRound(ev.target.value)}
          />
          <button
            className="text-[red] font-bold px-2 btn bg-gray-100 -ml-[40px]"
            onClick={() => {
              navigate(ROUTES.MAIN_ROUTES.HOF_ID.replace(":roundId", goRound));
            }}
          >
            Go!
          </button>
        </div>
        {hofData && (
          <div className="mx-auto flex text-secondary items-center">
            {Number(roundId || hofData.currentRound - 1) !== 1 && (
              <Link
                className="text-sm cursor-pointer"
                to={ROUTES.MAIN_ROUTES.HOF_ID.replace(
                  ":roundId",
                  Number(roundId || hofData.currentRound - 1) - 1
                )}
              >
                &lt;&lt;
              </Link>
            )}
            {pagination({
              curPage: roundId || hofData.currentRound - 1,
              totalPage: hofData ? hofData.currentRound : 0,
            }).map((page, idx) => (
              <Link
                className={`px-1 cursor-pointer ${
                  page === Number(roundId || hofData.currentRound - 1)
                    ? "text-secondary text-lg font-bold"
                    : "text-white text-sm"
                }`}
                key={`page_${idx}`}
                to={ROUTES.MAIN_ROUTES.HOF_ID.replace(":roundId", page)}
              >
                {page}
              </Link>
            ))}
            {Number(roundId || hofData.currentRound - 1) !==
              hofData.currentRound - 1 && (
              <Link
                className="text-sm cursor-pointer"
                to={ROUTES.MAIN_ROUTES.HOF_ID.replace(
                  ":roundId",
                  1 + Number(roundId)
                )}
              >
                &gt;&gt;
              </Link>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};
