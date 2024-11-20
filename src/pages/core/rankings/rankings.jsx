import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getRankingData } from "../../../api/user";
import { ROUTES } from "../../../common/constant";

export const Rankings = ({}) => {
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const onlinePlayers = useSelector(({ online }) => online.onlinePlayers);
  const topPlayers = useSelector(({ user }) => user.rankedData);
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch_datac
    let tmp = [];
    if (type === "free") {
      tmp = topPlayers ? topPlayers.topFreePlayers : [];
    } else if (type === "supporter") {
      tmp = topPlayers ? topPlayers.topSupporters : [];
    } else if (type === "player") {
      tmp = topPlayers ? topPlayers.topPlayers : [];
    } else if (type === "crew") {
      tmp = topPlayers ? topPlayers.topCrews : [];
    } else tmp = [];

    setData(
      tmp.map((u) => ({
        ...u,
        online: onlinePlayers
          ? !!onlinePlayers.find((x) => x._id === u._id)
          : false,
      }))
    );
  }, [type, onlinePlayers]);

  useEffect(() => {
    getRankingData(dispatch);
  }, []);

  return (
    <Layout currentActiveTab={"rankings"}>
      {topPlayers && (
        <div className="flex flex-col flex-1">
          <div className={styles["ranking-actions"]}>
            <div
              className={classNames(styles["top-supporters"], {
                [styles["active"]]: type === "supporter",
              })}
              onClick={() => {
                setType("supporter");
              }}
            ></div>
            <div className="flex justify-center mt-[50px]">
              <div
                className={classNames(styles["top-free-players"], {
                  [styles["active"]]: type === "free",
                })}
                onClick={() => setType("free")}
              ></div>
              <div
                className={classNames(styles["top-players"], {
                  [styles["active"]]: type === "player",
                })}
                onClick={() => setType("player")}
              ></div>
            </div>
            <div className="flex justify-center mt-[62px]">
              <div
                className={classNames(styles["top-crews"], {
                  [styles["active"]]: type === "crew",
                })}
                onClick={() => setType("crew")}
              ></div>
              <div
                className={styles["other-stats"]}
                onClick={() => navigate("/statmisc")}
              ></div>
            </div>
          </div>

          {type !== "" && (
            <table className="text-white mx-auto">
              <thead>
                <tr>
                  <td className="w-[30px] text-white" />
                  <td className="w-[200px] text-lg font-bold border-b border-b-gray-100 border-solid border-transparent border-0 py-2">
                    Name
                  </td>
                  <td className="w-[100px] text-lg font-bold border-b border-b-gray-100 border-solid border-transparent border-0 py-2">
                    Net Worth
                  </td>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, id) => {
                    return (
                      <tr key={`ranking_table_${id}`} className="">
                        <td className="flex items-center mt-1">
                          {type !== "crew" && (
                            <img
                              src={`/pics/${
                                item.online ? "yellow" : "white"
                              }.gif`}
                              alt="online"
                              w="10"
                              h="10"
                            />
                          )}
                        </td>
                        <td className="text-sm py-1 text-secondary cursor-pointer">
                          <span className="text-white">{id + 1}. </span>
                          <u
                            onClick={() => {
                              if (type && type !== "crew") {
                                navigate("/profile", { state: item });
                              } else if (type === "crew") {
                                navigate(
                                  ROUTES.MAIN_ROUTES.CREW_PROFILE.replace(
                                    ":crew_id",
                                    item._id
                                  )
                                );
                              }
                            }}
                          >
                            {item.name}
                          </u>
                        </td>
                        <td className="text-sm py-1">
                          {Number(Math.floor(item.netWorth)).toLocaleString("en-US")}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
          {type !== "" && type !== "crew" && (
            <div className="flex gap-2 h-[20px] mx-auto mt-auto mt-min-5 items-center">
              <img src={`/pics/yellow.gif`} alt="online" w="10" h="10" />
              <span className="text-white">= online</span>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};
