import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../api/user";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import Hover from "../../../common/components/hover/hover";
export const Profile = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const location = useLocation();
  const onlinePlayer = location.state;
  const currentUser = useSelector(({ user }) => user.user);
  const user = onlinePlayer ? onlinePlayer : currentUser;
  const [showHover, setShowHover] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const handleMouseOver = (item) => {
    setShowHover(true);
    setItemInfo(item);
  };
  const handleMouseLeave = () => {
    setShowHover(false);
    setItemInfo({});
  };
  useEffect(() => {
    if (!user) return;
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://78.138.0.79:5000/${user.avatar}`, {
          method: "GET",
          headers: {
            "Cross-Origin-Resource-Policy": "cross-origin", // or 'same-site'
          },
          mode: "cors", // Ensure CORS mode is enabled
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageSrc(imageObjectURL);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchImage();
  }, [user.avatar]);

  const video_id =
    user && user.youtube && user.youtube.youtube
      ? user.youtube.youtube.split("v=")[1].split("&")[0]
      : "";

  const dispatch = useDispatch();

  useEffect(() => {
    getUserInfo(dispatch);
  }, []);

  return (
    <Layout currentActiveTab={"headquarters"}>
      <div className="flex-1">
        <img src="/pics/user.gif" alt="user.gif" className="block" />
        <div
          className={`mx-3 border-2 ${
            user.characterType === "Soldier"
              ? "border-primary"
              : user.characterType === "Navyseal"
              ? "border-navyseal"
              : user.characterType === "Terrorist"
              ? "border-terrorist"
              : "border-primary"
          } flex flex-col`}
        >
          <div className={`flex flex-col px-3 py-4`}>
            <div className="flex justify-between">
              <p className="text-sm text-secondary font-bold">
                {user && user.name}
              </p>
              <p className="text-sm text-[red] font-bold">
                Net worth:{" "}
                {user && user.netWorth
                  ? user.netWorth.toLocaleString("en-US")
                  : 0}
              </p>
            </div>
            <img src="/images/onlineimg.gif" alt="online" className="mx-auto" />
          </div>
          <div
            className={`flex border-t-2 ${
              user.characterType === "Soldier"
                ? "border-t-primary"
                : user.characterType === "Navyseal"
                ? "border-t-navyseal"
                : user.characterType === "Terrorist"
                ? "border-t-terrorist"
                : "border-t-primary"
            } border-transparent`}
          >
            <div
              className={`flex flex-col px-3 py-2 flex-1 border-r-2 ${
                user.characterType === "Soldier"
                  ? "border-r-primary"
                  : user.characterType === "Navyseal"
                  ? "border-r-navyseal"
                  : user.characterType === "Terrorist"
                  ? "border-r-terrorist"
                  : "border-r-primary"
              } border-transparent`}
            >
              <table
                className={
                  user.characterType === "Soldier"
                    ? styles["custom-table"]
                    : user.characterType === "Navyseal"
                    ? styles["navyseal-table"]
                    : styles["terrorist-table"]
                }
              >
                <tbody>
                  <tr>
                    <td colSpan={2} className="text-center">
                      PLAYER INFO
                    </td>
                  </tr>
                  <tr>
                    <td>Class</td>
                    <td>{user && user.characterType}</td>
                  </tr>
                  <tr>
                    <td>Grade</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Level</td>
                    <td>
                      {user && user.level
                        ? user.level.toLocaleString("en-US")
                        : 1}
                    </td>
                  </tr>
                  <tr>
                    <td>Total Recruits</td>
                    <td>
                      {user && user.recruits
                        ? user.recruits.toLocaleString("en-US")
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Directly Recruits Today</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <img
                  src="/images/winsmastery.jpg"
                  alt="a"
                  className="my-5"
                  title={`wins: ${
                    user && user.wins ? user.wins.toLocaleString("en-US") : 0
                  }`}
                />
                <img
                  src="/images/clicksmastery.jpg"
                  alt="b"
                  className="my-5"
                  title={`Recruits: ${
                    user && user.recruits
                      ? user.recruits.toLocaleString("en-US")
                      : 0
                  }`}
                />
                <img
                  src="/images/levelmastery.jpg"
                  alt="c"
                  className="my-5"
                  title={`Level: ${
                    user && user.level ? user.level.toLocaleString("en-US") : 1
                  }`}
                />
                <img
                  src="/images/defensemastery.jpg"
                  alt="d"
                  className="my-5"
                  title={`Defended Attacks: ${
                    user && user.defended_attacks
                      ? user.defended_attacks.toLocaleString("en-US")
                      : 1
                  }`}
                />
              </div>

              <div
                className={`my-1 ${
                  user.characterType === "Soldier"
                    ? "bg-dark-primary"
                    : user.characterType === "Navyseal"
                    ? "bg-dark-navyseal"
                    : user.characterType === "Terrorist"
                    ? "bg-dark-terrorist"
                    : "bg-dark-primary"
                } text-sm font-bold text-white text-center mt-3`}
              >
                MEDALS
              </div>
            </div>
            <div className="flex flex-col px-3 py-2 flex-1">
              <div
                className={`my-1 ${
                  user.characterType === "Soldier"
                    ? "bg-dark-primary"
                    : user.characterType === "Navyseal"
                    ? "bg-dark-navyseal"
                    : user.characterType === "Terrorist"
                    ? "bg-dark-terrorist"
                    : "bg-dark-primary"
                } text-sm font-bold text-white text-center`}
              >
                DESCRIPTION
              </div>
              <div className="text-xs text-white">
                {user && user.description}
              </div>
              <div
                className={`my-1 ${
                  user.characterType === "Soldier"
                    ? "bg-dark-primary"
                    : user.characterType === "Navyseal"
                    ? "bg-dark-navyseal"
                    : user.characterType === "Terrorist"
                    ? "bg-dark-terrorist"
                    : "bg-dark-primary"
                } text-sm font-bold text-white text-center`}
              >
                PLAYER'S AVATAR
              </div>
              <div>
                <img
                  src={imageSrc ? imageSrc : "/pics/avatar.gif"}
                  alt="avatar"
                  className="mx-auto"
                />
              </div>
              <div
                className={`my-1 ${
                  user.characterType === "Soldier"
                    ? "bg-dark-primary"
                    : user.characterType === "Navyseal"
                    ? "bg-dark-navyseal"
                    : user.characterType === "Terrorist"
                    ? "bg-dark-terrorist"
                    : "bg-dark-primary"
                } text-sm font-bold text-white text-center`}
              >
                MONEY
              </div>
              <p className="text-center text-white font-bold text-sm">
                MONEY available:
              </p>
              <p className="text-center text-green-600 font-bold">
                ${user && user.money.toLocaleString("en-US")}
              </p>
              <div
                className={`my-1 ${
                  user.characterType === "Soldier"
                    ? "bg-dark-primary"
                    : user.characterType === "Navyseal"
                    ? "bg-dark-navyseal"
                    : user.characterType === "Terrorist"
                    ? "bg-dark-terrorist"
                    : "bg-dark-primary"
                } text-sm font-bold text-white text-center mt-3`}
              >
                CREW
              </div>
              <p className="text-left text-white font-bold text-sm">
                {user && user.name} is not in a crew at the moment
              </p>
              <div
                className={`my-1 ${
                  user.characterType === "Soldier"
                    ? "bg-dark-primary"
                    : user.characterType === "Navyseal"
                    ? "bg-dark-navyseal"
                    : user.characterType === "Terrorist"
                    ? "bg-dark-terrorist"
                    : "bg-dark-primary"
                } text-sm font-bold text-white text-center mt-3`}
              >
                SUPPLIES
              </div>
              <div className="flex">
                <div className="flex flex-col w-[70px]">
                  <p className="text-[red] text-xs font-bold border-gray-900 border-2 text-center">
                    Attack items
                  </p>
                  {user &&
                    user.items
                      .filter((i) => i.item.type === "attack")
                      .map(({ item }, id) => (
                        <div key={`attack_item_${id}`} className="relative">
                          <img
                            src={`/images/items/${item.pic}`}
                            onMouseOver={() => handleMouseOver(item)}
                            onMouseLeave={() => handleMouseLeave()}
                            alt={item.pic}
                            className={styles["item"]}
                          />
                        </div>
                      ))}
                </div>
                <div className="flex flex-col w-[70px]">
                  <p className="text-blue-800 text-xs font-bold border-gray-900 border-2 text-center">
                    Defense items
                  </p>
                  {user &&
                    user.items
                      .filter((i) => i.item.type === "defence")
                      .map(({ item }, id) => (
                        <img
                          src={`/images/items/${item.pic}`}
                          alt={item.pic}
                          onMouseOver={() => handleMouseOver(item)}
                          onMouseLeave={() => handleMouseLeave()}
                          className={styles["item"]}
                          key={`defence_item_${id}`}
                        />
                      ))}
                </div>
                <div className="flex flex-col w-[70px]">
                  <p className="text-white text-xs font-bold border-gray-900 border-2 text-center">
                    Combo items
                  </p>
                  {user &&
                    user.items
                      .filter((i) => i.item.type === "combo")
                      .map(({ item }, id) => (
                        <img
                          src={`/images/items/${item.pic}`}
                          alt={item.pic}
                          onMouseOver={() => handleMouseOver(item)}
                          onMouseLeave={() => handleMouseLeave()}
                          className={styles["item"]}
                          key={`combo_item_${id}`}
                        />
                      ))}
                </div>
                <div className="flex flex-col w-[70px]">
                  <p className="text-white text-xs font-bold border-gray-900 border-2 text-center">
                    Income items
                  </p>
                  {user &&
                    user.items
                      .filter((i) => i.item.type === "income")
                      .map(({ item }, id) => (
                        <img
                          src={`/images/items/${item.pic}`}
                          alt={item.pic}
                          onMouseOver={() => handleMouseOver(item)}
                          onMouseLeave={() => handleMouseLeave()}
                          className={styles["item"]}
                          key={`combo_item_${id}`}
                        />
                      ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`border-t-2 ${
              user.characterType === "Soldier"
                ? "border-primary"
                : user.characterType === "Navyseal"
                ? "border-navyseal"
                : user.characterType === "Terrorist"
                ? "border-terrorist"
                : "border-primary"
            }`}
          >
            {user.youtube.enableYoutube ? (
              <YouTube
                videoId={video_id}
                className="youtube flex justify-center"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {showHover && (
        <Hover type={itemInfo.type}>
          <div className="text-white">{itemInfo.name}</div>
          <div>{itemInfo.count}/</div>
        </Hover>
      )}
    </Layout>
  );
};
