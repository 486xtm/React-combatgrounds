import React, { useEffect } from "react";
import { Header, Layout, Menu } from "../../../common/components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnlinePlayers } from "../../../api/user";
import { useNavigate } from "react-router-dom";

export const OnlinePlayers = () => {
  const onlinePlayers = useSelector(({ online }) => online.onlinePlayers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getOnlinePlayers(dispatch);
  }, []);
  return (
    <Layout currentActiveTab={"headquarters"}>
      <div className="flex-1 mx-5">
        <div className="text-[#FFFF00] text-[24px] font-[1000] my-5 underline">
          {onlinePlayers.length} Online Players
        </div>
        <div className="border-[#FFFF00] border-[1px] w-full min-h-[500px] h-auto text-[#FFFF00] ">
          <div className="w-full flex text-center font-bold">
            <div className="w-[10%] border-[#FFFF00] border-[1px] leading-7">
              No
            </div>
            <div className="w-[30%] border-[#FFFF00] border-[1px] leading-7">
              Name
            </div>
            <div className="w-[30%] border-[#FFFF00] border-[1px] leading-7">
              Character Type
            </div>
            <div className="w-[30%] border-[#FFFF00] border-[1px] leading-7">
              Level
            </div>
          </div>
          {onlinePlayers.length == 0 ? (
            <div className="text-center mt-5">No Online Players</div>
          ) : (
            onlinePlayers.map((user, index) => (
              <div className="w-full flex text-center" key={index}>
                <div className="w-[10%] border-[#FFFF00] border-[1px] leading-7">
                  {index + 1}
                </div>
                <a
                  className="w-[30%] border-[#FFFF00] border-[1px] leading-7 underline cursor-pointer"
                  onClick={() => {
                    navigate("/profile", {state: user});
                  }}
                >
                  {user.name || "--"}
                </a>
                <div className="w-[30%] border-[#FFFF00] border-[1px] leading-7">
                  {user.characterType || "--"}
                </div>
                <div className="w-[30%] border-[#FFFF00] border-[1px] leading-7">
                  {user.level || "--"}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};
