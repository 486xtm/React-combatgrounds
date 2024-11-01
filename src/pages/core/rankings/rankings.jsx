import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

export const Rankings = ({}) => {
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //fetch_datac
    if (type === "free")
      setData([
        {
          name: "A",
          worth: "234,234,234",
          online: true,
        },
        {
          name: "B",
          worth: "234,234,234",
          online: false,
        },
        {
          name: "wefs",
          worth: "234,234,234",
          online: true,
        },

        {
          name: "A",
          worth: "234,234,234",
          online: true,
        },
        {
          name: "B",
          worth: "234,234,234",
          online: false,
        },
        {
          name: "wefs",
          worth: "234,234,234",
          online: true,
        },

        {
          name: "A",
          worth: "234,234,234",
          online: true,
        },
        {
          name: "B",
          worth: "234,234,234",
          online: false,
        },
        {
          name: "wefs",
          worth: "234,234,234",
          online: true,
        },
      ]);
    else if (type === "crew") {
      setData([
        {
          name: "A",
          worth: "234,234,234",
          online: true,
        },
        {
          name: "abs",
          worth: "234,234,234",
          online: false,
        },
      ]);
    } else if (type === "") {
      setData([]);
    } else if (type === "player") {
      setData([
        {
          name: "A",
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
          name: "A",
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
    } else {
      setData([
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
    }
    // setData([]);
  }, [type]);

  return (
    <Layout currentActiveTab={"rankings"}>
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
                <td className="w-[250px] text-lg font-bold border-b border-b-gray-100 border-solid border-transparent border-0 py-2">
                  Name
                </td>
                <td className="w-[150px] text-lg font-bold border-b border-b-gray-100 border-solid border-transparent border-0 py-2">
                  Net Worth
                </td>
              </tr>
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
                          src={`/pics/${item.online ? "yellow" : "white"}.gif`}
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
        )}
      </div>
    </Layout>
  );
};
