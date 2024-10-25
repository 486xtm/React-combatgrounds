import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";
import { useNavigate } from "react-router-dom";

export const Rankings = ({}) => {
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //fetch_datac
    console.log("type===>", type);
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
      </div>
    </Layout>
  );
};
