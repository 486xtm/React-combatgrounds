import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header, Menu } from "../../../common/components";
import { useNavigate } from "react-router-dom";

export const Rankings = ({}) => {
  const [type, setType] = useState("");
  const [data, setData] = useState([
    {
      name: "webdde",
      worth: "234,234,234",
      online: true,
    },
    {
      name: "abs",
      worth: "234,234,234",
      online: false,
    },
    {
      name: "wefs",
      worth: "234,234,234",
      online: true,
    },

    {
      name: "webdde",
      worth: "234,234,234",
      online: true,
    },
    {
      name: "abs",
      worth: "234,234,234",
      online: false,
    },
    {
      name: "wefs",
      worth: "234,234,234",
      online: true,
    },

    {
      name: "webdde",
      worth: "234,234,234",
      online: true,
    },
    {
      name: "abs",
      worth: "234,234,234",
      online: false,
    },
    {
      name: "wefs",
      worth: "234,234,234",
      online: true,
    },

    {
      name: "webdde",
      worth: "234,234,234",
      online: true,
    },
    {
      name: "abs",
      worth: "234,234,234",
      online: false,
    },
    {
      name: "wefs",
      worth: "234,234,234",
      online: true,
    },

    {
      name: "webdde",
      worth: "234,234,234",
      online: true,
    },
    {
      name: "abs",
      worth: "234,234,234",
      online: false,
    },
    {
      name: "wefs",
      worth: "234,234,234",
      online: true,
    },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    //fetch_datac
    console.log("type===>", type);
    // setData([]);
  }, [type]);

  return (
    <div className={styles["ranking-container"]}>
      <Header currentActiveTab="rankings" />
      <div className="flex flex-col w-[870px] border-primary border-2 bg-black">
        <div className={styles["status-bar"]}>
          <div className="flex flex-col">
            <div className="flex pt-1">
              <span className="text-black text-sm pl-[160px] font-bold w-[460px]">
                SeaLife24111
              </span>
              <span className="text-secondary text-sm pl-3 font-bold">
                2,083
              </span>
            </div>
            <div className="flex pt-1">
              <span className="text-secondary text-sm pl-[200px] font-bold w-[460px]">
                35,471
              </span>
              <span className="text-secondary text-sm pl-3 font-bold">
                452,319
              </span>
            </div>
            <div className="flex pt-1">
              <span className="text-secondary text-sm pl-[472px] font-bold">
                $552,452,319
              </span>
            </div>
            <div className="flex pt-1">
              <div className="black text-sm ml-[90px] font-bold w-[200px] h-5 border-2 border-gray">
                <div className="bg-gray-100 text-center text-gray-500 w-[30%] h-full">
                  30%
                </div>
              </div>
              <span className="text-secondary text-sm pl-[182px] font-bold">
                25
              </span>
            </div>
          </div>
          <div className="text-xxl font-bold text-secondary ml-[160px] mt-[50px]">
            25
          </div>
        </div>
        <div className="flex">
          <div className={styles["buy-turns"]} />
          <div className={styles["subscribe"]} />
        </div>
        <div className="flex min-h-[625px] w-full bg-black pb-[20px] pt-5 mt-5">
          <Menu />
          <div className="flex flex-col flex-1">
            <div className={styles["ranking-actions"]}>
              <div
                className="text-transparent text-lg font-bold mx-auto cursor-pointer"
                onClick={() => {
                  setType("supporter");
                  console.log("oka");
                }}
              >
                AAAAAAAAAAAA
              </div>
              <div className="flex justify-center">
                <div
                  className="text-transparent text-lg font-bold cursor-pointer"
                  onClick={() => setType("free")}
                >
                  BBBBBBBB
                </div>
                <div
                  className="text-transparent text-lg font-bold ml-[175px] cursor-pointer"
                  onClick={() => setType("player")}
                >
                  CCCCCCCC
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="text-transparent text-lg font-bold cursor-pointer"
                  onClick={() => setType("crew")}
                >
                  DDDDD
                </div>
                <div
                  className="text-transparent text-lg font-bold ml-[100px] cursor-pointer"
                  onClick={() => navigate("/statmisc")}
                >
                  EEEEEEE
                </div>
              </div>
            </div>

            <table className="text-white mx-auto">
              <thead>
                <td className="w-[30px] text-white" />
                <td className="w-[250px] text-lg font-bold border-b border-b-gray-100 border-solid border-transparent border-0 py-2">
                  Name
                </td>
                <td className="w-[150px] text-lg font-bold border-b border-b-gray-100 border-solid border-transparent border-0 py-2">
                  Net Worth
                </td>
              </thead>
              <tbody>
                {data &&
                  data.map((item, id) => {
                    return (
                      <tr
                        key={`ranking_table_${id}`}
                        className="first:h-[40px] align-bottom"
                      >
                        <td>
                          <img
                            src={`pics/${item.online ? "yellow" : "white"}.gif`}
                            alt="online"
                            w="10"
                            h="10"
                          />
                        </td>
                        <td className="text-sm py-1 text-secondary">
                          <span className="text-white">{id}. </span>
                          <u>{item.name}</u>
                        </td>
                        <td className="text-sm py-1">{item.worth}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
