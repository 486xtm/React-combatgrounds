import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { publicURL } from "../../../common/constant";
import { FaTrashCan } from "react-icons/fa6";
import { ROUTES } from "../../../common/constant";
import { DeleteAlert } from "../../../common/components/delete_alert/delete";
import {
  getCrewInfoById,
  removeChat,
  removeCrewAvatar,
  updateCrewInfo,
} from "../../../api/admin";
import { formattedDate } from "../../../common/utils";

export const AdminCrewInfo = () => {
  const { crew_id } = useParams();
  const [memberList, setMemberList] = useState([]);
  const crewInfo = useSelector(({ admin }) => admin.selectedCrew);
  const onlinePlayers = useSelector(({ online }) => online.onlinePlayers);

  const [crew, setCrew] = useState(null);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUserInfo = (user) => {
    if( user && user._id)
      navigate(
        ROUTES.ADMIN_ROUTES.USER_INFO.replace(":user_id", user._id)
      );
  }
  function sliceString(str) {
    if (str.length <= 8) {
      return str; // Return the original string if it's too short
    }
    const firstPart = str.slice(0, 5);
    const lastPart = str.slice(-3);
    return firstPart + "..." + lastPart;
  }

  useEffect(() => {
    getCrewInfoById({ crew_id }, dispatch);
  }, []);

  const handleRemoveChat = (chat_id) => {
    removeChat({ chat_id, crew_id }, dispatch);
  };

  const handleCrewAvatarRemove = () => {
    removeCrewAvatar({ crew_id }, dispatch);
    setShowDeleteAlert(false);
  };

  const handleUpdateCrew = () => {
    updateCrewInfo({ crew }, dispatch);
  };

  useEffect(() => {
    if (!crewInfo) return;
    setCrew(crewInfo);
  }, [crewInfo]);

  useEffect(() => {
    if (!crew) return;
    setMemberList(
      crew.members.map((u) => ({
        ...u.member,
        role: u.role,
        online: onlinePlayers
          ? !!onlinePlayers.find((x) => x._id === u.member._id)
          : false,
      }))
    );
  }, [crew, onlinePlayers]);

  return (
    <div className="flex flex-col w-[1224px] gap-5 py-5 mx-auto mt-10 text-gray-700 filter shadow-filter">
      <div className="flex rounded-2xl gap-2 justify-between">
        <div className="flex flex-col w-[24%] rounded-xl bg-white px-3 py-5 items-center cursor-pointer shadow-md">
          <span className="font-bold text-xxl">Total Members</span>
          <span className="font-bold text-xxl">
            {crew ? crew.members.length + 1 : "---"}
          </span>
        </div>
        <div className="flex flex-col w-[24%] rounded-xl bg-white px-3 py-5 items-center cursor-pointer shadow-md">
          <span className="font-bold text-xxl">Net Worth</span>
          <span className="font-bold text-xxl">
            {crew && crew.netWorth ? Number(crew.netWorth).toLocaleString("en-US") : "---"}
          </span>
        </div>
        <div className="flex flex-col w-[24%] rounded-xl bg-white px-3 py-5 items-center cursor-pointer shadow-md">
          <span className="font-bold text-xxl">Average Net Worth</span>
          <span className="font-bold text-xxl">
            {crew && crew.averageNetworth ? Number(crew.averageNetworth).toLocaleString("en-US") : "---"}
          </span>
        </div>
        <div className="flex flex-col w-[24%] rounded-xl bg-white px-3 py-5 items-center cursor-pointer shadow-md">
          <span className="font-bold text-xxl">Cash in Bank</span>
          <span className="font-bold text-xxl">
            {crew && crew.money ? Number(crew.money).toLocaleString("en-US") : "---"}
          </span>
        </div>
      </div>
      <div className="flex w-full bg-white rounded-xl gap-5 p-3">
        <div className="w-[24%] max-h-[225px] flex overflow-hidden rounded-xl relative group cursor-pointer">
          <img
            src={
              crew && crew.avatar
                ? `${publicURL}/${crew.avatar}`
                : "/crew/crewpicdef.gif"
            }
            className={`mx-auto z-20 border-b border-yellow-200 min-w-full`}
          />

          <div
            className={`absolute flex items-center justify-center left-0 top-0 w-full h-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-30 text-black bg-white`}
            onClick={() => setShowDeleteAlert(true)}
          >
            <FaTrashCan />
          </div>
        </div>
        <textarea
          className="p-1 flex-1 rounded-xl border border-gray-200 px-3 py-2"
          value={crew ? crew.description : "---"}
          onChange={(e) => setCrew({ ...crew, description: e.target.value })}
        ></textarea>
      </div>
      <div className="flex w-[1224px] h-[380px] gap-5">
        <div className="flex flex-col w-[24%] px-5 items-center bg-white rounded-xl gap-2">
          <span className="text-xxl font-bold flex items-center mt-3 mb-5">
            Ranking System
          </span>
          {crew && (
            <>
              <div className="flex text-xl font-bold w-full px-5 justify-between items-center">
                <span>Rank{1}:</span>
                <input
                  value={crew.roles[0]}
                  className="max-w-[115px] border p-2 rounded-lg"
                  onChange={(e) =>
                    setCrew({
                      ...crew,
                      roles: [
                        e.target.value,
                        crew.roles[1],
                        crew.roles[2],
                        crew.roles[3],
                        crew.roles[4],
                      ],
                    })
                  }
                />
              </div>

              <div className="flex text-xl font-bold w-full px-5 justify-between items-center">
                <span>Rank{2}:</span>
                <input
                  value={crew.roles[1]}
                  className="max-w-[115px] border p-2 rounded-lg"
                  onChange={(e) =>
                    setCrew({
                      ...crew,
                      roles: [
                        crew.roles[0],
                        e.target.value,
                        crew.roles[2],
                        crew.roles[3],
                        crew.roles[4],
                      ],
                    })
                  }
                />
              </div>

              <div className="flex text-xl font-bold w-full px-5 justify-between items-center">
                <span>Rank{3}:</span>
                <input
                  value={crew.roles[2]}
                  className="max-w-[115px] border p-2 rounded-lg"
                  onChange={(e) =>
                    setCrew({
                      ...crew,
                      roles: [
                        crew.roles[0],
                        crew.roles[1],
                        e.target.value,
                        crew.roles[3],
                        crew.roles[4],
                      ],
                    })
                  }
                />
              </div>

              <div className="flex text-xl font-bold w-full px-5 justify-between items-center">
                <span>Rank{4}:</span>
                <input
                  value={crew.roles[3]}
                  className="max-w-[115px] border p-2 rounded-lg"
                  onChange={(e) =>
                    setCrew({
                      ...crew,
                      roles: [
                        crew.roles[0],
                        crew.roles[1],
                        crew.roles[2],
                        e.target.value,
                        crew.roles[4],
                      ],
                    })
                  }
                />
              </div>

              <div className="flex text-xl font-bold w-full px-5 justify-between items-center">
                <span>Rank{5}:</span>
                <input
                  value={crew.roles[4]}
                  className="max-w-[115px] border p-2 rounded-lg"
                  onChange={(e) =>
                    setCrew({
                      ...crew,
                      roles: [
                        crew.roles[0],
                        crew.roles[1],
                        crew.roles[2],
                        crew.roles[3],
                        e.target.value,
                      ],
                    })
                  }
                />
              </div>
            </>
          )}
        </div>
        <div className="flex rounded-2xl bg-white shadow-xl p-3 flex-1 gap-3">
          <div className="h-full w-[20%] flex flex-col items-center justify-center">
            <div className="h-full relative shadow-glow border-yellow-200 border-[1px] flex flex-col justify-center items-center rounded-xl overflow-hidden bg-dark-primary min-w-full cursor-pointer"
            onClick={() => handleUserInfo(crew.leader)}
            >
              <img
                src={
                  crew && crew.leader && crew.leader.avatar
                    ? `${publicURL}/${crew.leader.avatar}`
                    : "/pics/avatar.gif"
                }
                className={`mx-auto z-20 h-[90%] w-auto border-b border-yellow-200 min-w-full ${
                  crew && crew.leader && !!onlinePlayers.find((x) => x._id === crew.leader._id)
                    ? ""
                    : "grayscale"
                }`}
              />
              <div className="font-medium text-white my-1 text-lg">{crew && crew.leader && crew.leader.name} -L</div>
            </div>
          </div>
          <div className="flex-1 flex h-full rounded-lg flex-wrap justify-between gap-y-1">
            {memberList &&
              memberList.map((m, idx) => (
                <div
                  key={`mem_${idx}`}
                  className="w-[19%] h-[48%] border-[1px] shadow-md shadow-dark-primary bg-dark-primary border-yellow-200 rounded-lg overflow-hidden flex flex-col items-center cursor-pointer"
                  onClick={() => handleUserInfo(m)}
                >
                  <img
                    className={`h-[85%] w-full border-b border-yellow-200 ${
                      m.online ? "" : "grayscale"
                    }`}
                    src={
                      m.avatar
                        ? `${publicURL}/${m.avatar}`
                        : "/avatar/default.gif"
                    }
                  />
                  <div className="font-medium text-white text-xs mt-1">
                    {m.name ? sliceString(m.name) + ` - R${m.role}` : "------"}
                  </div>
                </div>
              ))}
            {memberList &&
              new Array(10 - memberList.length).fill().map((x, idx) => (
                <div
                  key={`mem_non_${idx}`}
                  className="w-[19%] h-[48%] border-[1px] shadow-md shadow-dark-primary bg-dark-primary border-yellow-200 rounded-lg overflow-hidden flex flex-col items-center"
                >
                  <img
                    src="/avatar/default.gif"
                    className={`h-[85%] w-full border-b border-yellow-200`}
                  />
                  <div className="font-medium text-white text-xs mt-1">
                    {"------"}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5">
        <div className="flex-1 px-7 py-7 rounded-xl bg-white max-h-[885px] overflow-auto">
          <p className="font-bold text-xxl ml-7 mb-5 border-b-2 py-2">
            Crew Board
          </p>
          <div className="flex flex-col gap-2">
            {crew
              ? crew.board.map(({ author, content, _id , createdAt }, idx) => (
                  <div className="flex border-b py-5 relative" key={`crew_board_${idx}`}>
                    <div className="flex flex-col items-center w-[10%] cursor-pointer"
                      onClick={() => handleUserInfo(author)}
                    >
                      <img
                        className="w-10 h-10 rounded-full border-[1px]"
                        src={
                          author.avatar
                            ? `${publicURL}/${author.avatar}`
                            : "/pics/avatar.gif"
                        }
                        alt="author avatar"
                      />
                      <span>{author.name}</span>
                    </div>

                    <span className="w-[85%] break-all">{content}</span>
                    <div
                      className="w-[3%] cursor-pointer ml-5"
                      onClick={() => handleRemoveChat(_id)}
                    >
                      <FaTrashCan />
                    </div>
                    <div className="absolute bottom-2 right-5">{formattedDate(createdAt)}</div>
                  </div>
                ))
              : "---"}
          </div>
        </div>
      </div>

      <button
        onClick={handleUpdateCrew}
        className="bg-[#014CFA] rounded-lg py-4 text-lg font-bold px-5 text-white shadow-lg  hover:bg-blue-500 mt-2 ml-auto mr-4"
      >
        Update
      </button>
      <DeleteAlert isOpen={showDeleteAlert} onClose={() => setShowDeleteAlert(false)} onDelete={handleCrewAvatarRemove} />
    </div>
  );
};
