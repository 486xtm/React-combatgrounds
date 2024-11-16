import React, { useState, useRef, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css"; // Ensure this file includes the animation
import { createCrewChat, getCrewBoard } from "../../../api/crew";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { socketURL } from "../../../common/constant";
import { socket } from "../../../socket/socket";
import { setUnreadCrewChatCount } from "../../../redux/crewSlice";

export const CrewBoard = () => {
  const [text, setText] = useState("");
  const chatContainerRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const board = useSelector(({ crew }) => crew.board);

  const handleSend = () => {
    if (!text) return;
    createCrewChat({ content: text }, dispatch, socket);
    setText("");
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
              <div className="flex gap-2" key={index}>
                <span
                  className={` max-w-[80%] break-words ml-auto py-1 px-5 bg-secondary-green rounded-xl`}
                >
                  {message.content}
                </span>
                {message.author && message.author.avatar ? (
                  <img
                    className="w-[30px] h-[30px] rounded-[50%]"
                    src={`${socketURL}/${message.author.avatar}`}
                  />
                ) : (
                  <div className={`w-[30px] h-[30px] rounded-[50%] border-[1px] font-[800] ${message.author ? "bg-[#50BDDF] border-[#50BDDF]" : "bg-black border-[red]"} flex items-center justify-center`}>
                      {message.author ? message.author.name[0].toUpperCase() : "X"}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="absolute ml-3 mt-[12px] flex gap-2 h-[30px]">
        <input
          placeholder="Type a message..."
          className="w-[300px] text-xs resize-none h-[30px] px-[7px] py-[3px] rounded-lg bg-transparent border-yellow-200 border-[1px] shadow-inner shadow-[rgba(255,255,255,0.3)]"
          onChange={(ev) => setText(ev.target.value)}
          value={text}
          rows={1}
        />
        <button
          onClick={handleSend}
          className="rounded-lg border-2 px-4 border-yellow-200 bg-transparent hover:shadow-glow_small hover:shadow-white shadow-inherit"
        >
          Send
        </button>
      </div>
    </CrewLayout>
  );
};
