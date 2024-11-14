import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCrewInfo } from "../../../api/crew";
import { socketURL } from "../../../common/constant";
export const AdminCrewInfo = () => {
  const { crew_id } = useParams();
  const [memberList, setMemberList] = useState([]);
  const crewInfo = useSelector(({ crew }) => crew.info);
  const onlinePlayers = useSelector(({ online }) => online.onlinePlayers);

  const dispatch = useDispatch();
  function sliceString(str) {
    if (str.length <= 8) {
      return str; // Return the original string if it's too short
    }
    const firstPart = str.slice(0, 5);
    const lastPart = str.slice(-3);
    return firstPart + "..." + lastPart;
  }

  useEffect(() => {
    getCrewInfo({ crew_id }, dispatch);
  }, []);

  useEffect(() => {
    if (!crewInfo) return;
    setMemberList(
      crewInfo.members.map((u) => ({
        ...u.member,
        role: u.role,
        online: onlinePlayers
          ? !!onlinePlayers.find((x) => x._id === u.member._id)
          : false,
      }))
    );
  }, [crewInfo, onlinePlayers]);
  return (
    <div>
      <div className="w-full flex mb-6 mt-10 gap-5">
        <div className="flex flex-col w-[900px]  bg-white pb-10 pt-5 px-5 rounded-2xl shadow-xl ">
          <div className="flex w-full px-5 mt-5 gap-3">
            <div className="w-1/5 flex flex-col items-center justify-center h-[250px] ">
              <div className="relative shadow-glow border-yellow-200 border-[1px] flex flex-col justify-center items-center rounded-xl overflow-hidden bg-dark-primary min-w-full">
                <img
                  src={
                    crewInfo && crewInfo.leader.avatar
                      ? `${socketURL}/${crewInfo.leader.avatar}`
                      : "/pics/avatar.gif"
                  }
                  className={`mx-auto z-20 h-[220px] w-auto border-b border-yellow-200 min-w-full ${
                    crewInfo &&
                    !!onlinePlayers.find((x) => x._id === crewInfo.leader._id)
                      ? ""
                      : "grayscale"
                  }`}
                />
                <div className="font-medium text-white my-1">LEADER</div>
              </div>
            </div>
            <div className="flex-1 flex p-2 h-[250px] border-[1px] rounded-lg flex-wrap justify-between gap-y-1">
              {memberList &&
                memberList.map((m, idx) => (
                  <div
                    key={`mem_${idx}`}
                    className="w-[19%] border-[1px] shadow-md shadow-dark-primary bg-dark-primary border-yellow-200 h-[115px] rounded-lg overflow-hidden flex flex-col items-center"
                  >
                    <img
                      className={`h-[85px] w-full border-b border-yellow-200 ${
                        m.online ? "" : "grayscale"
                      }`}
                      src={
                        m.avatar
                          ? `${socketURL}/${m.avatar}`
                          : "/avatar/default.gif"
                      }
                    />
                    <div className="font-medium text-white text-xs mt-1">
                      {m.name
                        ? sliceString(m.name) + ` - R${m.role}`
                        : "------"}
                    </div>
                  </div>
                ))}
              {memberList &&
                new Array(10 - memberList.length).fill().map((x, idx) => (
                  <div
                    key={`mem_non_${idx}`}
                    className="w-[19%] border-[1px] shadow-md shadow-dark-primary bg-dark-primary border-yellow-200 h-[115px] rounded-lg overflow-hidden flex flex-col items-center"
                  >
                    <img
                      src="/avatar/default.gif"
                      className={`h-[85px] w-full border-b border-yellow-200`}
                    />
                    <div className="font-medium text-white text-xs mt-1">
                      {"------"}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex-1 w-[300px] bg-white pb-10 pt-5 px-5 rounded-2xl shadow-xl "></div>
      </div>
      <div className="w-full flex gap-5">
        <div className="w-1/2 min-w-[600px] p-2 bg-white shadow-2xl rounded-md">
          <div className="text-gray-700 flex border-[1px]  mx-2 mt-2  ">
            <div className="w-1/2 border-r-[1px] ">
              <div className="flex text-center items-center justify-center font-medium text-gray-700 border-b-[1px] ">
                <div className="w-[50%] py-1">LEADER</div>
                <div className="w-[50%] py-1 text-gray-700 underline">
                  {crewInfo && crewInfo.leader ? crewInfo.leader.name : "---"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-gray-700 border-b-[1px] ">
                <div className="w-[50%] py-1">TOTAL MEMBERS</div>
                <div className="w-[50%] text-gray-700 py-1">
                  {(crewInfo && crewInfo.members.length + 1) || "--"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-gray-700 border-b-[1px] ">
                <div className="w-[50%] py-1">AVERAGE MEMBER NET WORTH</div>
                <div className="w-[50%] text-gray-700 py-1">
                  {(crewInfo &&
                    Number(crewInfo.averageNetworth).toLocaleString()) ||
                    "---"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-gray-700 border-b-[1px] ">
                <div className="w-[50%] py-1">CREW NET WORTH</div>
                <div className="w-[50%] text-gray-700 py-1">
                  {(crewInfo && Number(crewInfo.netWorth).toLocaleString()) ||
                    "---"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-gray-700 border-b-[1px] ">
                <div className="w-[50%] py-1">BANK</div>
                <div className="w-[50%] text-gray-700 py-1">
                  {(crewInfo &&
                    `$${Number(crewInfo.money).toLocaleString()}`) ||
                    "---"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-gray-700   mt-2">
                <div className="w-[45%] py-1">RANKING SYSTEM</div>

                <div className="w-[55%] text-left py-1 leading-none text-gray-700">
                  {crewInfo &&
                    crewInfo.roles.map((r, id) => (
                      <p key={`tx_${id}`}>
                        Rank{id + 1} - {r}
                      </p>
                    ))}
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <div className="flex text-center items-center justify-center font-medium text-gray-700 border-b-[1px] ">
                <div className="w-full py-1">Description</div>
              </div>
              <div className="text-left flex break-all text-xs overflow-y-auto px-2 py-1 mb-3 h-[100px] font-medium text-gray-700 ">
                {(crewInfo && crewInfo.description) || "---"}
              </div>
              <div className="flex text-center h-[155px] items-center justify-center font-medium text-gray-700 border-t-[1px]  overflow-hidden">
                <img
                  className="w-auto h-[155px]"
                  src={
                    crewInfo && crewInfo.avatar
                      ? `${socketURL}/${crewInfo.avatar}`
                      : "/crew/crewpicdef.gif"
                  }
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 min-w-[600px] p-2 bg-white shadow-2xl rounded-md"></div>
      </div>
    </div>
  );
};
