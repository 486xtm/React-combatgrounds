import React, { useState, useRef, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css"; // Ensure this file includes the animation
import { createCrewChat, getCrewBoard } from "../../../api/crew";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicURL } from "../../../common/constant";
import { socket } from "../../../socket/socket";
import { setUnreadCrewChatCount } from "../../../redux/crewSlice";
import { formattedDate } from "../../../common/utils";
export const CrewBoard = () => {
  const [text, setText] = useState("");
  const chatContainerRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const board = useSelector(({ crew }) => crew.board);
  const user = useSelector(({user}) => user.user);
  const handleSend = () => {
    if (!text) return;
    createCrewChat({ content: text }, dispatch, socket);
    setText("");
  };
  const handleCrewUserInfo = (user) => {
    if (user) {
      navigate("/profile", { state: user });
    }
  };
  useEffect(() => {
    getCrewBoard(dispatch);
    dispatch(setUnreadCrewChatCount(0));
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth", // Smooth scroll to the bottom
      });
    }
  }, [board]);

  return (
    <CrewLayout title="Board">
      <div className="flex flex-col w-full">
        <div
          ref={chatContainerRef}
          className="text-white border-[1px] p-2 gap-2 border-secondary-green rounded-md mx-2 mt-2 h-[300px] overflow-y-auto flex flex-col-reverse" // Reverse the order of messages
        >
          {board &&
            board.map((message, index) => (
              <div className={`flex gap-2 ${user._id == (message.author ? message.author._id : "-") ? "" : "flex-row-reverse"}`} key={index}>
                <span
                  className={` max-w-[80%] break-words py-1 px-5 bg-secondary-green rounded-xl ${user._id == (message.author ? message.author._id : "-") ? "ml-auto" : "mr-auto"} `}
                >
                  <div
                    className="text-sm text-yellow-200  cursor-pointer "
                    onClick={() => handleCrewUserInfo(message.author)}
                  >
                    <span className="underline">{message.author ? message.author.name : "Deleted User"}</span>{" "}
                    <span className="text-[10px] text-gray-300">
                       {formattedDate(message.author && message.createdAt)}
                    </span>
                  </div>
                  {message.content}
                </span>
                {message.author && message.author.avatar ? (
                  <img
                    className="w-[30px] h-[30px] rounded-[50%] cursor-pointer border border-dark-primary"
                    src={`${publicURL}/${message.author.avatar}`}
                    onClick={() => handleCrewUserInfo(message.author)}
                    alt={message.author.avatar}
                  />
                ) : (
                  <div
                    className={`w-[30px] h-[30px] rounded-[50%] border-[1px] font-[800] ${
                      message.author
                        ? "bg-[#50BDDF] border-[#50BDDF]"
                        : "bg-black border-[red]"
                    } flex items-center justify-center`}
                  >
                    {message.author
                      ? message.author.name[0].toUpperCase()
                      : "X"}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="mt-[70px] flex flex-col gap-1 h-[200px] bg-[#141408] rounded-lg pb-2">
        <textarea
          placeholder="Type a message..."
          className="text-xs resize-none m-3 px-[7px] py-[3px] rounded-lg flex-1 bg-transparent border-yellow-200 border-[1px] shadow-inner shadow-[rgba(255,255,255,0.3)]"
          onChange={(ev) => setText(ev.target.value)}
          value={text}
          rows={5}
        />
        <button
          onClick={handleSend}
          className="rounded-lg border-2 px-4 ml-auto mr-5 border-yellow-200 bg-transparent hover:shadow-glow_small hover:shadow-white shadow-inherit"
        >
          Send
        </button>
      </div>
    </CrewLayout>
  );
};
