import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header, Layout, Menu } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "../../../common/components/modal/modal";
import YouTube from "react-youtube";
import Hover from "../../../common/components/hover/hover";
import {
  formattedDuration,
  getColorSchemaByCharacterType,
  getGradeString,
} from "../../../common/utils";
import { getUserById } from "../../../api/user";
import { ROUTES, publicURL } from "../../../common/constant";
import { getCrewInfo } from "../../../api/crew";

export const Profile = () => {
  const location = useLocation();
  const otherUser = location.state;

  const currentUser = useSelector(({ user }) => user.user);
  const otherUserInfoAll = useSelector(({ user }) => user.other);
  const user = otherUser ? otherUserInfoAll || otherUser : currentUser;
  const onlinePlayers = useSelector(({ online }) => online.onlinePlayers);
  const onlineStatus = onlinePlayers
    ? !!onlinePlayers.find((x) => x._id === user._id)
    : false;
  const [showHover, setShowHover] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [selectedItem, setSelectedItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [hoverType, setHoverType] = useState(1);

  const handleMouseOver = (item, type) => {
    setShowHover(true);
    setItemInfo(item);
    setHoverType(type);
  };
  const handleMouseLeave = () => {
    setShowHover(false);
  };
  const handleMuseDown = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (otherUser) {
      getUserById({ id: otherUser._id }, dispatch);
    }
  }, [otherUser]);

  const video_data =
    user &&
    user.youtube &&
    user.youtube.youtube &&
    user.youtube.youtube.split("v=").length > 1
      ? user.youtube.youtube.split("v=")[1]
      : "";

  const video_id =
    video_data && video_data.split("&").length > 0
      ? video_data.split("&")[0]
      : "";

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
          } flex flex-col mb-10`}
        >
          <div className={`flex flex-col px-3 py-4`}>
            <div className="flex justify-between">
              <p className="text-sm text-secondary font-bold">
                {user && user.name}
              </p>
              <p className="text-sm text-[red] font-bold">
                Net worth:{" "}
                {user && user.netWorth
                  ? Number(user.netWorth).toLocaleString("en-US")
                  : 0}
              </p>
            </div>
            <div className="flex px-2 relative mt-3">
              {user && user.grade ? (
                <img
                  src={`/pics/${getGradeString(
                    user.grade
                  ).toLocaleLowerCase()}.gif`}
                  alt={user.grade}
                  height="40"
                  className="my-auto absolute top-1/2 transform -translate-y-1/2"
                />
              ) : null}
              {user && currentUser && user._id !== currentUser._id ? (
                <div
                  onClick={() => {
                    localStorage.setItem("MAILTYPE", "Compose");
                    localStorage.setItem("RECEIVER", user && user.name);
                    navigate("/mailcenter");
                  }}
                  className={`my-auto cursor-pointer absolute top-1/2 right-0 px-2 transform -translate-y-1/2 text-white text-sm font-bold bg-${getColorSchemaByCharacterType(
                    user.characterType
                  )}`}
                >
                  Message this player
                </div>
              ) : null}
              <img
                src={`/images/${
                  onlineStatus ? "onlineimg.gif" : "offlineimg.gif"
                }`}
                alt="online"
                className="mx-auto"
              />
            </div>
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
                    <td>{getGradeString(user && user.grade)}</td>
                  </tr>
                  <tr>
                    <td>Level</td>
                    <td>
                      {user && user.level
                        ? Number(user.level).toLocaleString("en-US")
                        : 1}
                    </td>
                  </tr>
                  <tr>
                    <td>Total Recruits</td>
                    <td>
                      {user && user.recruits
                        ? Number(user.recruits).toLocaleString("en-US")
                        : 0}
                    </td>
                  </tr>
                  <tr>
                    <td>Directly Recruits Today</td>
                    <td>0</td>
                  </tr>
                  {user && user.aimName ? (
                    <tr>
                      <td>Discord name</td>
                      <td>{user.aimName}</td>
                    </tr>
                  ) : null}

                  <tr>
                    <td>Points</td>
                    <td>{(user && user.points) || 0}</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <img
                  src="/images/winsmastery.jpg"
                  alt="a"
                  className="my-3 cursor-pointer"
                  onMouseOver={() =>
                    handleMouseOver(
                      {
                        msg: `${
                          user && user.att_win
                            ? Number(user.att_win).toLocaleString("en-US")
                            : 0
                        } Wins`,
                        type: "wins",
                      },
                      2
                    )
                  }
                  onMouseLeave={() => handleMouseLeave()}
                />
                <div className="flex flex-wrap">
                  {new Array(Math.floor((user.att_win || 0) / 70))
                    .fill()
                    .map((i, id) => (
                      <img
                        src="/images/winmast.jpg"
                        key={`winmast_${id}`}
                        className="w-[10px] h-[12px]"
                      />
                    ))}
                </div>
                <img
                  src="/images/clicksmastery.jpg"
                  alt="b"
                  className="my-3 cursor-pointer"
                  onMouseOver={() =>
                    handleMouseOver(
                      {
                        msg: `${
                          user && user.recruits
                            ? user.recruits.toLocaleString("en-US")
                            : 0
                        } Recruits`,
                        type: "recruits",
                      },
                      2
                    )
                  }
                  onMouseLeave={() => handleMouseLeave()}
                />
                <div className="flex flex-wrap">
                  {new Array(Math.floor((user.recruits || 0) / 200_000))
                    .fill()
                    .map((i, id) => (
                      <img
                        src="/images/clicksmast.jpg"
                        key={`clickmast_${id}`}
                        className="w-[10px] h-[12px]"
                      />
                    ))}
                </div>
                <img
                  src="/images/levelmastery.jpg"
                  alt="c"
                  className="my-3 cursor-pointer"
                  onMouseOver={() =>
                    handleMouseOver(
                      {
                        msg: `${
                          user && user.level
                            ? Number(user.level).toLocaleString("en-US")
                            : 1
                        } Level`,
                        type: "level",
                      },
                      2
                    )
                  }
                  onMouseLeave={() => handleMouseLeave()}
                />
                <div className="flex flex-wrap">
                  {new Array(Math.floor((user.level || 0) / 2_000))
                    .fill()
                    .map((i, id) => (
                      <img
                        src="/images/levelmast.jpg"
                        key={`levelmast_${id}`}
                        className="w-[10px] h-[12px]"
                      />
                    ))}
                </div>
                <img
                  src="/images/defensemastery.jpg"
                  alt="d"
                  className="my-3 cursor-pointer"
                  onMouseOver={() =>
                    handleMouseOver(
                      {
                        msg: `${
                          user && user.def_win
                            ? Number(user.def_win).toLocaleString("en-US")
                            : 0
                        } Defended Attacks`,
                        type: "defended",
                      },
                      2
                    )
                  }
                  onMouseLeave={() => handleMouseLeave()}
                />

                <div className="flex flex-wrap">
                  {new Array(Math.floor((user.def_win || 0) / 10))
                    .fill()
                    .map((i, id) => (
                      <img
                        src="/images/defencemast.jpg"
                        key={`defencemast_${id}`}
                        className="w-[10px] h-[12px]"
                      />
                    ))}
                </div>
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
                } text-sm font-bold text-white text-center my-5 `}
              >
                MEDALS
              </div>
              {user && user.medals ? (
                <div className="flex w-[80%] ml-[10%]">
                  <div className="w-1/3 flex flex-col gap-4">
                    {user.medals
                      .filter((i) => i.medal.type === 0)
                      .map((item, index) => (
                        <img
                          onMouseOver={() =>
                            handleMouseOver(
                              { ...item.medal, count: item.count },
                              3
                            )
                          }
                          onMouseLeave={() => handleMouseLeave()}
                          key={`medal_${item.medal.type}_${index}`}
                          src={`/images/medals/medal${item.medal.id}.png`}
                          className="cursor-pointer"
                        />
                      ))}
                  </div>
                  <div className="w-1/3  flex flex-col gap-4">
                    {user.medals
                      .filter((i) => i.medal.type === 1)
                      .map((item, index) => (
                        <img
                          onMouseOver={() =>
                            handleMouseOver(
                              { ...item.medal, count: item.count },
                              3
                            )
                          }
                          onMouseLeave={() => handleMouseLeave()}
                          key={`medal_${item.medal.type}_${index}`}
                          src={`/images/medals/medal${item.medal.id}.png`}
                          className="cursor-pointer"
                        />
                      ))}
                  </div>
                  <div className="w-1/3  flex flex-col gap-4">
                    {user.medals
                      .filter((i) => i.medal.type === 2)
                      .map((item, index) => (
                        <img
                          onMouseOver={() =>
                            handleMouseOver(
                              { ...item.medal, count: item.count },
                              3
                            )
                          }
                          onMouseLeave={() => handleMouseLeave()}
                          key={`medal_${item.medal.type}_${index}`}
                          src={`/images/medals/medal${item.medal.id}.png`}
                          className="cursor-pointer"
                        />
                      ))}
                  </div>
                </div>
              ) : null}
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
              <div className="text-xs text-white hyphens-auto">
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
                  src={
                    user && user.avatar
                      ? `${publicURL}/${user.avatar}`
                      : "/pics/avatar.gif"
                  }
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
              <p className="text-center text-green-600 font-bold mb-1">
                ${user && Number(user.money).toLocaleString("en-US")}
              </p>
              <div
                className={`${
                  user.characterType === "Soldier"
                    ? "bg-dark-primary"
                    : user.characterType === "Navyseal"
                    ? "bg-dark-navyseal"
                    : user.characterType === "Terrorist"
                    ? "bg-dark-terrorist"
                    : "bg-dark-primary"
                } text-sm font-bold text-white text-center my-1`}
              >
                LAST ACTIVITIES
              </div>
              {/* navigate("/profile", { state: user }); */}
              {user && !onlineStatus && (
                <p className="text-white text-sm my-1 text-center">
                  <b>Last Seen:</b>
                  <span className="ml-2">
                    {formattedDuration(user.lastSeen)}
                  </span>
                </p>
              )}

              {user && user.lastAttack && (
                <div className="text-white text-sm mb-1 text-center">
                  <b>Last Attacked:</b>
                  <u
                    className="text-secondary ml-2 cursor-pointer"
                    onClick={() =>
                      navigate("/profile", {
                        state: user.lastAttack,
                      })
                    }
                  >
                    {user.lastAttack.name}
                  </u>{" "}
                  <p>{formattedDuration(user.lastAttackTime)}</p>
                </div>
              )}
              {user && user.lastAttackedBy && (
                <div className="text-white text-sm my-1 text-center">
                  <b>Last Attacked By:</b>
                  <u
                    className="text-secondary ml-2 cursor-pointer"
                    onClick={() =>
                      navigate("/profile", {
                        state: user.lastAttackedBy,
                      })
                    }
                  >
                    {user.lastAttackedBy.name}
                  </u>{" "}
                  <p>{formattedDuration(user.lastAttackedTime)}</p>
                </div>
              )}

              <div
                className={`${
                  user.characterType === "Soldier"
                    ? "bg-dark-primary"
                    : user.characterType === "Navyseal"
                    ? "bg-dark-navyseal"
                    : user.characterType === "Terrorist"
                    ? "bg-dark-terrorist"
                    : "bg-dark-primary"
                } text-sm font-bold text-white text-center my-1`}
              >
                CREW
              </div>
              <p className="text-center text-white font-bold text-sm">
                {user && user.crew ? (
                  <>
                    <Link
                      to={ROUTES.MAIN_ROUTES.CREW_PROFILE.replace(
                        ":crew_id",
                        user.crew._id
                      )}
                    >
                      <u>{user.crew_rank}</u>
                    </Link>
                    <img
                      src={
                        user && user.crew.avatar
                          ? `${publicURL}/${user.crew.avatar}`
                          : "/crew/crewpicdef.gif"
                      }
                      alt="avatar"
                      className="mx-auto"
                    />
                  </>
                ) : (
                  user && <span>{user.name} is not in crew at the moment</span>
                )}
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
              <div className="flex mb-[20px] mx-auto mt-1">
                <div className="flex flex-col w-[70px]">
                  <p className="text-[red] text-xs font-bold border-gray-900 border-2 text-center">
                    Attack items
                  </p>
                  {user &&
                    user.items &&
                    user.items
                      .filter((i) => i.item.type === "attack")
                      .sort((x, y) => x.item.cost - y.item.cost)
                      .map(({ item, count }, id) => (
                        <div key={`attack_item_${id}`} className="relative">
                          <img
                            src={`/images/items/${item.pic}`}
                            onMouseOver={() =>
                              handleMouseOver({ ...item, count }, 1)
                            }
                            onMouseLeave={() => handleMouseLeave()}
                            onMouseDown={() =>
                              handleMuseDown({ ...item, count })
                            }
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
                    user.items &&
                    user.items
                      .filter((i) => i.item.type === "defence")
                      .sort((x, y) => x.item.cost - y.item.cost)
                      .map(({ item, count }, id) => (
                        <img
                          src={`/images/items/${item.pic}`}
                          alt={item.pic}
                          onMouseOver={() =>
                            handleMouseOver({ ...item, count }, 1)
                          }
                          onMouseLeave={() => handleMouseLeave()}
                          onMouseDown={() => handleMuseDown({ ...item, count })}
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
                    user.items &&
                    user.items
                      .filter((i) => i.item.type === "combo")
                      .sort((x, y) => x.item.cost - y.item.cost)
                      .map(({ item, count }, id) => (
                        <img
                          src={`/images/items/${item.pic}`}
                          alt={item.pic}
                          onMouseOver={() =>
                            handleMouseOver({ ...item, count }, 1)
                          }
                          onMouseLeave={() => handleMouseLeave()}
                          onMouseDown={() => handleMuseDown({ ...item, count })}
                          className={styles["item"]}
                          key={`combo_item_${id}`}
                        />
                      ))}
                </div>
                <div className="flex flex-col w-[70px]">
                  <p className="text-green-500 text-xs font-bold border-gray-900 border-2 text-center">
                    Income items
                  </p>
                  {user &&
                    user.items &&
                    user.items
                      .filter((i) => i.item.type === "income")
                      .sort((x, y) => x.item.cost - y.item.cost)
                      .map(({ item, count }, id) => (
                        <img
                          src={`/images/items/${item.pic}`}
                          alt={item.pic}
                          onMouseOver={() =>
                            handleMouseOver({ ...item, count }, 1)
                          }
                          onMouseLeave={() => handleMouseLeave()}
                          onMouseDown={() => handleMuseDown({ ...item, count })}
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
            {user && user.youtube && user.youtube.enableYoutube ? (
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
      <Hover show={showHover} type={itemInfo.type}>
        {hoverType == 1 && (
          <div>
            <div className="text-white ">{itemInfo.name}</div>
            <div className="text-white leading-none">
              {Number(itemInfo.count).toLocaleString("en-US")}.00 /{" "}
              <span className="text-[red]">
                {Number(itemInfo.maxCount).toLocaleString("en-US")}
              </span>
            </div>
            <div className="text-white text-[13px] leading-none">
              {itemInfo.description}
            </div>
          </div>
        )}
        {hoverType == 2 && (
          <div>
            <div className="text-white ">{itemInfo.msg}</div>
          </div>
        )}
        {hoverType == 3 && (
          <div>
            <div className="text-white text-xs leading-none">
              {itemInfo.name}
            </div>
            <div className="text-[yellow] text-xs leading-none">
              ({Number(itemInfo.count).toLocaleString("en-US")})
            </div>
            <div className="text-white text-xs">{itemInfo.description}</div>
          </div>
        )}
      </Hover>
      <Modal isOpen={showModal} onClose={closeModal} type={selectedItem.type}>
        <div className="w-[450px]">
          <div className="text-[18px] mb-3 ml-2 text-[#f0ff25] font-bold underline ">
            Item Info
          </div>
          <div className="border-2 border-b-0 w-full flex">
            <div className="w-2/5 text-center text-[red] font-bold">Name</div>
            <div className="w-[30%] text-center border-x-2 text-[red] font-bold">
              Max
            </div>
            <div className="w-[30%] text-center text-[red] font-bold">Cost</div>
          </div>
          <div className="border-2 w-full flex border-b-0">
            <div className="w-2/5 text-center">
              {selectedItem && selectedItem.name}
            </div>
            <div className="w-[30%] text-center border-x-2">
              {Number(selectedItem && selectedItem.maxCount).toLocaleString(
                "en-US"
              )}
            </div>
            <div className="w-[30%] text-center">
              {Number(selectedItem && selectedItem.cost).toLocaleString(
                "en-US"
              )}
            </div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center text-[red] font-bold">
              Attack Bonus
            </div>
            <div className="w-[30%] text-center border-x-2 text-[red] font-bold">
              Defence Bonus
            </div>
            <div className="w-[30%] text-center text-[red] font-bold">
              Income Bonus
            </div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center">
              {selectedItem && selectedItem.attackBonus}
            </div>
            <div className="w-[30%] text-center border-x-2">
              {selectedItem && selectedItem.defenceBonus}
            </div>
            <div className="w-[30%] text-center">
              {selectedItem && selectedItem.incomeBonus}
            </div>
          </div>
          <div className="border-2 border-b-0 w-full flex ">
            <div className="w-2/5 text-center text-[red] font-bold">
              picture
            </div>
            <div className="w-[60%] text-center border-l-2 text-[red] font-bold">
              Description
            </div>
          </div>
          <div className="border-2 w-full flex ">
            <div className="w-2/5 flex items-center justify-center">
              <img src={`/images/items/${selectedItem && selectedItem.pic}`} />
            </div>
            <div className="w-[60%] text-center border-l-2">
              {selectedItem && selectedItem.description}
            </div>
          </div>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white px-3 py-1 float-right rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </Layout>
  );
};
