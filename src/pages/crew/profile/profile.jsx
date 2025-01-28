import React, { useState, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCrewInfo } from "../../../api/crew";
import { publicURL } from "../../../common/constant";
import { formattedNumber } from "../../../common/utils";

function sliceString(str) {
  if (str.length <= 8) {
    return str; // Return the original string if it's too short
  }
  const firstPart = str.slice(0, 4);
  const lastPart = str.slice(-2);
  return firstPart + "..." + lastPart;
}

export const CrewProfile = () => {
  const [tab, setTab] = useState(0);
  const [memberList, setMemberList] = useState([]);
  const crewInfo = useSelector(({ crew }) => crew.info);
  const onlinePlayers = useSelector(({ online }) => online.onlinePlayers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { crew_id } = useParams();
  const handleCrewUserInfo = (user) => {
    if (user) {
      navigate("/profile", { state: user });
    }
  };
  useEffect(() => {
    getCrewInfo({ crew_id }, dispatch);
  }, [crew_id]);

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
    <CrewLayout title="Profile">
      <div className="flex flex-col w-full">
        <div className="absolute flex right-0 text-white font-bold gap-3 mr-10 -mt-8">
          <div
            className={`${tab == 0 && "text-yellow-200"} cursor-pointer`}
            onClick={() => setTab(0)}
          >
            Members
          </div>
          <div
            className={`${tab == 1 && "text-yellow-200"} cursor-pointer`}
            onClick={() => setTab(1)}
          >
            Crew Info
          </div>
        </div>
        <div
          className={` absolute right-0 rounded-lg h-[2px] bg-yellow-200 -mt-2 ${
            tab == 0 ? "mr-[118px] w-[85px]" : "mr-[38px] w-[80px]"
          } transition-all duration-200`}
        ></div>

        {tab == 1 && (
          <div className="text-white flex border-[1px] border-secondary-green rounded-md mx-2 mt-2 h-[300px]">
            <div className="w-1/2 border-r-[1px] border-secondary-green">
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">LEADER</div>
                <div
                  className="w-[50%] py-1 text-white underline cursor-pointer"
                  onClick={() =>
                    handleCrewUserInfo(crewInfo && crewInfo.leader)
                  }
                >
                  {crewInfo && crewInfo.leader ? crewInfo.leader.name : "---"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">TOTAL MEMBERS</div>
                <div className="w-[50%] text-white py-1">
                  {(crewInfo && crewInfo.members.length + 1) || "--"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">AVERAGE MEMBER NET WORTH</div>
                <div className="w-[50%] text-white py-1">
                  {(crewInfo &&
                    Number(crewInfo.averageNetworth).toLocaleString("en-US")) ||
                    "---"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">CREW NET WORTH</div>
                <div className="w-[50%] text-white py-1">
                  {(crewInfo &&
                    Number(Math.floor(crewInfo.netWorth)).toLocaleString(
                      "en-US"
                    )) ||
                    "---"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-[50%] py-1">BANK</div>
                <div className="w-[50%] text-white py-1">
                  {(crewInfo &&
                    `$${Number(crewInfo.money).toLocaleString("en-US")}`) ||
                    "---"}
                </div>
              </div>
              <div className="flex text-center items-center justify-center font-medium text-yellow-200  border-secondary-green mt-2">
                <div className="w-[25%] py-1">RANKING SYSTEM</div>
                <div className="w-[25%] py-1 leading-none text-white">
                  <p>Rank 1:</p>
                  <p>Rank 2:</p>
                  <p>Rank 3:</p>
                  <p>Rank 4:</p>
                  <p>Rank 5:</p>
                </div>
                <div className="w-[40%] text-left py-1 leading-none text-white">
                  {crewInfo &&
                    crewInfo.roles.map((r, id) => <p key={`tx_${id}`}>{r}</p>)}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex text-center items-center justify-center font-medium text-yellow-200 border-b-[1px] border-secondary-green">
                <div className="w-full py-1">Description</div>
              </div>
              <div className="text-left flex break-all whitespace-pre-line text-xs overflow-y-auto px-2 py-1 mb-3 h-[100px] font-medium text-white ">
                {(crewInfo && crewInfo.description) || "---"}
              </div>
              <div className="flex text-center h-[150px] items-center justify-center font-medium text-yellow-200 border-t-[1px] border-secondary-green overflow-hidden">
                <img
                  className="w-auto h-[150px]"
                  src={
                    crewInfo && crewInfo.avatar
                      ? `${publicURL}/${crewInfo.avatar}`
                      : "/crew/crewpicdef.gif"
                  }
                  alt="img"
                />
              </div>
            </div>
          </div>
        )}
        {tab == 0 && (
          <div className="flex flex-col w-full mt-3 px-5 gap-3">
            <div className="text-lg font-bold">
              Crew Name : {crewInfo && crewInfo.name}{" "}
            </div>
            <div className="flex flex-row">
              <div
                className="w-1/5 flex flex-col items-center justify-center h-[250px] cursor-pointer"
                onClick={() => handleCrewUserInfo(crewInfo && crewInfo.leader)}
              >
                <div className="relative shadow-glow_small hover:shadow-glow border-yellow-200 border-[1px] flex flex-col justify-center items-center rounded-xl overflow-hidden bg-dark-primary min-w-full">
                  <img
                    src={
                      crewInfo && crewInfo.leader.avatar
                        ? `${publicURL}/${crewInfo.leader.avatar}`
                        : "/pics/avatar.gif"
                    }
                    className={`mx-auto z-20 h-[220px] w-auto border-b border-yellow-200 min-w-full ${
                      crewInfo &&
                      !!onlinePlayers.find((x) => x._id === crewInfo.leader._id)
                        ? ""
                        : "grayscale"
                    }`}
                    alt="avatar"
                  />
                  <div className="font-medium text-sm text-white my-1">
                    {crewInfo && sliceString(crewInfo.leader.name)}&nbsp;
                    {crewInfo && formattedNumber(crewInfo.leader.netWorth)}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex p-2 h-[250px] border-[1px] rounded-lg flex-wrap justify-between gap-y-1">
                {memberList &&
                  memberList.map((m, idx) => (
                    <div
                      key={`mem_${idx}`}
                      className="w-[19%] border-[1px] shadow-md shadow-dark-primary bg-dark-primary border-yellow-200 h-[115px] rounded-lg overflow-hidden flex flex-col items-center cursor-pointer  hover:shadow-glow"
                      onClick={() => handleCrewUserInfo(m)}
                    >
                      <img
                        className={`h-[85px] w-full border-b border-yellow-200 ${
                          m.online ? "" : "grayscale"
                        }`}
                        src={
                          m.avatar
                            ? `${publicURL}/${m.avatar}`
                            : "/avatar/default.gif"
                        }
                        alt="default-avatar.gif"
                      />
                      <div className="font-medium text-white text-xs mt-1">
                        {m.name
                          ? sliceString(m.name) +
                            ` - ${formattedNumber(m.netWorth)}`
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
                        alt="default.gif"
                      />
                      <div className="font-medium text-white text-xs mt-1">
                        {"------"}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </CrewLayout>
  );
};
