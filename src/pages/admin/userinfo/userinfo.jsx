import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { ROUTES, publicURL } from "../../../common/constant";
import { getUserById } from "../../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { getGradeString, getRole } from "../../../common/utils";
import styles from "./styles.module.css";
import Hover from "../../../common/components/hover/hover";
import { FaTrashCan } from "react-icons/fa6";
import { addAchievementToUsers, deleteUser, getAllAchievements, removeAchievementFromUsers, removeAvatar, resetUser } from "../../../api/admin";
import { DeleteAlert } from "../../../common/components/delete_alert/delete";
import Modal from "../../../common/components/modal/modal";
import { ConfirmAlert } from "../../../common/components/confirm_alert/confirm_alert";

export const AdminUserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector(({ user }) => user.other);

  const { user_id } = useParams();
  const [user, setUser] = useState(userInfo);
  const [imgHover, setImgHover] = useState(false);
  const [showHover, setShowHover] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [hoverType, setHoverType] = useState(1);
  const [descriptionReaminLetters, setDescriptionReaminLetters] = useState(600);
  const [deleteType, setDeleteType] = useState(0);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [showRemoveAchivementModal, setShowRemoveAchievementModal] = useState(null);

  const achievements = useSelector(({ achievements }) => achievements.all);

  const handleMouseOver = (item, type) => {
    setShowHover(true);
    setItemInfo(item);
    setHoverType(type);
  };
  const handleMouseLeave = () => {
    setShowHover(false);
  };

  const handleResetUser = () => {
    resetUser(user, dispatch);
  };

  const handleRemoveUser = () => {
    deleteUser({ tag: "name", des: true }, 1, { user_id }, dispatch);
    navigate(ROUTES.ADMIN_ROUTES.USER_LIST);
  };

  const handleAvatarRemove = () => {
    removeAvatar({ user_id }, dispatch);
    setShowDeleteAlert(false);
  };

  const handleAddAchievement = (achievement_id) => {
    addAchievementToUsers({ achievement_id, user_id }, dispatch);
  }

  const handleRemoveAchievement = () => {
    removeAchievementFromUsers({ user_id, achievement_id: showRemoveAchivementModal._id }, dispatch);
    setShowRemoveAchievementModal(null);
  }

  useEffect(() => {
    if (user_id) {
      getUserById({ id: user_id }, dispatch);
      getAllAchievements(dispatch);
    }
  }, [user_id]);

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  useEffect(() => {
    if (user && user.description)
      setDescriptionReaminLetters(600 - user.description.length);
  }, [user]);
  return (
    <div
      className={
        "flex rounded-lg shadow-lg bg-white w-full min-w-[1000px] mt-10 p-5 gap-5" +
        " " +
        styles["calc-min-height"]
      }
    >
      <div className="w-[25%] flex flex-col">
        <div
          className="relative flex my-10 w-[235px] h-[235px] overflow-hidden rounded-full border-[1px] border-gray-400 shadow-lg mx-auto "
          onMouseOver={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
          onMouseDown={() => {
            setDeleteType(0);
            setShowDeleteAlert(true);
          }}
        >
          <img
            src={
              user && user.avatar
                ? `${publicURL}/${user.avatar}`
                : "/pics/avatar.gif"
            }
            alt="avatar"
            className="w-full h-auto   "
          />
          <div
            className={`left-0 bg-[rgba(255,255,255,0.6)] w-[235px] transition-opacity duration-300 h-[235px] right-0 absolute top-0 flex items-center text-gray-700 justify-center text-[40px] ${imgHover ? "opacity-100" : "opacity-0"
              }`}
          >
            <FaTrashCan />
          </div>
        </div>

        {/* <button className="bg-[#014CFA] rounded-lg py-1 w-1/2 mx-auto text-white shadow-md  hover:bg-blue-500">Reset</button> */}
        <div className="w-full text-center border-[1px] rounded-lg shadow-lg min-h-[700px] py-4">
          <span className="text-[20px] font-[900] text-gray-700">Medals</span>
          {user && user.medals && user.medals.length != 0 ? (
            <div className="flex w-[80%] ml-[10%] mt-5">
              <div className="w-1/3 flex flex-col gap-4">
                {user.medals
                  .filter((i) => i.medal.type === 0)
                  .map((item, index) => (
                    <img
                      onMouseOver={() =>
                        handleMouseOver({ ...item.medal, count: item.count }, 3)
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
                        handleMouseOver({ ...item.medal, count: item.count }, 3)
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
                        handleMouseOver({ ...item.medal, count: item.count }, 3)
                      }
                      onMouseLeave={() => handleMouseLeave()}
                      key={`medal_${item.medal.type}_${index}`}
                      src={`/images/medals/medal${item.medal.id}.png`}
                      className="cursor-pointer"
                    />
                  ))}
              </div>
            </div>
          ) : (
            <div className="text-[30px] mt-5 font-[900] text-gray-300">
              No Data
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 border-[1px] shadow-lg rounded-xl p-5 text-gray-700 flex">
        <div className="gap-2 flex flex-col w-1/2">
          <div className="flex items-center">
            <div className="w-[100px]">Name: </div>{" "}
            <input
              value={user && user.name ? user.name : ""}
              onChange={(ev) => setUser({ ...user, name: ev.target.value })}
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">Email: </div>{" "}
            <input
              value={user && user.email ? user.email : ""}
              onChange={(ev) => setUser({ ...user, email: ev.target.value })}
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">Discord: </div>{" "}
            <input
              value={user && user.aimName ? user.aimName : ""}
              onChange={(ev) => setUser({ ...user, aimName: ev.target.value })}
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">Role: </div>{" "}
            {/* <select
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray py-1-600 flex-1"
              value={user && user.role && Number(user.role) > 0  ? 1 : (user && user.role && Number(user.role) == -1 ? -1 : 0)}
              onChange={(ev) => setUser({ ...user, role: ev.target.value })}
            >
              <option value={-1}>Admin</option>
              <option value={1}>Supporter</option>
              <option value={0}>FreePlayer</option>
            </select> */}
            <span>{getRole(user)}</span>
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">Character: </div>{" "}
            <select
              className="border-[1px] rounded-md px-2 shadow-sm focus:border-gray-600 flex-1 py-1"
              value={
                user && user.characterType ? user.characterType : "Soldier"
              }
              onChange={(ev) =>
                setUser({ ...user, characterType: ev.target.value })
              }
            >
              <option value="Soldier">Soldier</option>
              <option value="Navyseal">Navyseal</option>
              <option value="Terrorist">Terrorist</option>
            </select>
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">Money: </div>{" "}
            <input
              value={
                user && user.money
                  ? Number(user.money).toLocaleString("en-US")
                  : 0
              }
              onChange={(ev) =>
                setUser({
                  ...user,
                  money: Number(ev.target.value.replace(/[^0-9]/g, "")),
                })
              }
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">Turn: </div>{" "}
            <input
              value={
                user && user.turn
                  ? Number(user.turn).toLocaleString("en-US")
                  : 0
              }
              onChange={(ev) =>
                setUser({
                  ...user,
                  turn: Number(ev.target.value.replace(/[^0-9]/g, "")),
                })
              }
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">bankTurn: </div>{" "}
            <input
              value={
                user && user.bankedTurn
                  ? Number(user.bankedTurn).toLocaleString("en-US")
                  : 0
              }
              onChange={(ev) =>
                setUser({
                  ...user,
                  bankedTurn: Number(ev.target.value.replace(/[^0-9]/g, "")),
                })
              }
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">level: </div>{" "}
            <input
              value={
                user && user.level
                  ? Number(user.level).toLocaleString("en-US")
                  : 0
              }
              onChange={(ev) =>
                setUser({
                  ...user,
                  level: Number(ev.target.value.replace(/[^0-9]/g, "")),
                })
              }
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">recruits: </div>{" "}
            <input
              value={
                user && user.recruits
                  ? Number(user.recruits).toLocaleString("en-US")
                  : 0
              }
              onChange={(ev) =>
                setUser({
                  ...user,
                  recruits: Number(ev.target.value.replace(/[^0-9]/g, "")),
                })
              }
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">points: </div>{" "}
            <input
              value={
                user && user.points
                  ? Number(user.points).toLocaleString("en-US")
                  : 0
              }
              onChange={(ev) =>
                setUser({
                  ...user,
                  points: Number(ev.target.value.replace(/[^0-9]/g, "")),
                })
              }
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">netWorth: </div>{" "}
            <input
              value={
                user && user.netWorth
                  ? Number(user.netWorth).toLocaleString("en-US")
                  : 0
              }
              disabled
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">rank: </div>{" "}
            <input
              value={user && user.rank ? user.rank : ""}
              disabled
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">Grade: </div>{" "}
            <input
              value={getGradeString(user && user.grade)}
              disabled
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[100px]">Crew: </div>{" "}
            <input
              value={user && user.crew_rank ? user.crew_rank : "No Crew"}
              disabled
              className="border-[1px] rounded-md px-2 py-1 shadow-sm focus:border-gray-600 flex-1"
            />
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <div className="text-left">Description: </div>
            <textarea
              className="flex-1 border-[1px] rounded-lg focus:border-gray-600 p-2"
              maxLength={600}
              rows={10}
              value={user && user.description ? user.description : ""}
              onChange={(e) => {
                setUser({ ...user, description: e.target.value });
              }}
            />
            <span className="text-sm text-bold mx-auto">
              {descriptionReaminLetters} characters left
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleResetUser}
              className="bg-[#014CFA] rounded-lg py-2 w-1/3 mx-auto text-white shadow-lg  hover:bg-blue-500 mt-2"
            >
              Update
            </button>
            <button
              onClick={() => {
                setDeleteType(1);
                setShowDeleteAlert(true);
              }}
              className="bg-red-500 rounded-lg py-2 w-1/3 mx-auto text-white shadow-lg  hover:bg-red-400 mt-2"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-4">
          <div className="bg-gray-100 shadow-lg rounded-lg px-5 py-3 ml-4">
            <div className="text-center mb-3 text-red-500 font-[900] text-[20px]">
              Attack Items{" "}
            </div>
            {user &&
              user.items
                .filter((i) => i.item.type === "attack")
                .sort((x, y) => x.item.cost - y.item.cost)
                .map(({ item, count }, id) => (
                  <div
                    key={`attack_item_admin_${id}`}
                    className="relative flex items-center mb-1"
                  >
                    <div className="w-[60%]">{item.name}</div>{" "}
                    <div className="w-[40%]">
                      <input
                        value={count ? count : 0}
                        onChange={() => { }}
                        disabled
                        className="rounded-md border-2 w-[100%] px-2"
                      />
                    </div>
                  </div>
                ))}
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg px-5 py-3 ml-4">
            <div className="text-center mb-3 text-blue-500 font-[900] text-[20px]">
              Defence Items{" "}
            </div>
            {user &&
              user.items
                .filter((i) => i.item.type === "defence")
                .sort((x, y) => x.item.cost - y.item.cost)
                .map(({ item, count }, id) => (
                  <div
                    key={`defence_item_admin_${id}`}
                    className="relative flex items-center mb-1"
                  >
                    <div className="w-[60%]">{item.name}</div>{" "}
                    <div className="w-[40%]">
                      <input
                        value={count ? count : 0}
                        onChange={() => { }}
                        disabled
                        className="rounded-md border-2 w-[100%] px-2"
                      />
                    </div>
                  </div>
                ))}
          </div>

          <div className="bg-gray-100 shadow-lg rounded-lg px-5 py-3 ml-4">
            <div className="text-center mb-3 text-purple-500 font-[900] text-[20px]">
              Combo Items{" "}
            </div>
            {user &&
              user.items
                .filter((i) => i.item.type === "combo")
                .sort((x, y) => x.item.cost - y.item.cost)
                .map(({ item, count }, id) => (
                  <div
                    key={`combo_item_admin_${id}`}
                    className="relative flex items-center mb-1"
                  >
                    <div className="w-[60%]">{item.name}</div>{" "}
                    <div className="w-[40%]">
                      <input
                        value={count ? count : 0}
                        onChange={() => { }}
                        disabled
                        className="rounded-md border-2 w-[100%] px-2"
                      />
                    </div>
                  </div>
                ))}
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg px-5 py-3 ml-4">
            <div className="text-center mb-3 text-green-500 font-[900] text-[20px]">
              Income Items{" "}
            </div>
            {user &&
              user.items
                .filter((i) => i.item.type === "income")
                .sort((x, y) => x.item.cost - y.item.cost)
                .map(({ item, count }, id) => (
                  <div
                    key={`income_item_admin_${id}`}
                    className="relative flex items-center mb-1"
                  >
                    <div className="w-[60%]">{item.name}</div>{" "}
                    <div className="w-[40%]">
                      <input
                        value={count ? count : 0}
                        onChange={() => { }}
                        disabled
                        className="rounded-md border-2 w-[100%] px-2"
                      />
                    </div>
                  </div>
                ))}
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg py-3 ml-4 relative">
            <div className="flex gap-2 text-center mb-3 font-[900] text-[20px] justify-center items-center">
              <span>Achievements</span>
              <div className="border-[3px] rounded-lg px-2 border-gray-800 cursor-pointer hover:border-green-600 hover:text-green-600" onClick={() => setShowAchievementModal(true)}>+</div>
            </div>
            {user && user.achievements && user.achievements.length ? (<div className="flex flex-wrap justify-center gap-1">
              {Array.from(user.achievements).sort((a, b) => a.id - b.id)
                .map((item, index) => (
                  <img
                    key={`achievement_${index}`}
                    src={`${publicURL}/${item.avatar}`}
                    className="cursor-pointer rounded"
                    width="55"
                    height="55"
                    onClick={() => setShowRemoveAchievementModal(item)}
                  />
                ))}
            </div>) : (<p className="text-center">No achievements</p>)}
            <Modal isOpen={showAchievementModal} onClose={() => setShowAchievementModal(false)}>
              <div className="flex flex-wrap gap-2">
                {Array.from(achievements).sort((a, b) => a.id - b.id)
                  .map((item, index) => (
                    <img
                      key={`achievement_${index}`}
                      src={`${publicURL}/${item.avatar}`}
                      className="cursor-pointer rounded"
                      width="55"
                      height="55"
                      onClick={() => handleAddAchievement(item._id)}
                    />
                  ))}
              </div>
            </Modal>
            <ConfirmAlert isOpen={showRemoveAchivementModal} onClose={() => setShowRemoveAchievementModal(null)} description="Please click OK to remove achievement from this user." onAccept={handleRemoveAchievement} />
          </div>
        </div>
      </div>
      <Hover show={showHover} type={itemInfo.type}>
        {hoverType == 1 && (
          <div>
            <div className="text-white ">{itemInfo.name}</div>
            <div className="text-white leading-none">
              {itemInfo.count}.00 /{" "}
              <span className="text-[red]">{itemInfo.maxCount}</span>
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
              ({itemInfo.count})
            </div>
            <div className="text-white text-xs">{itemInfo.description}</div>
          </div>
        )}
      </Hover>
      <DeleteAlert
        isOpen={showDeleteAlert}
        onClose={() => setShowDeleteAlert(false)}
        onDelete={deleteType == 0 ? handleAvatarRemove : handleRemoveUser}
      />
    </div>
  );
};
