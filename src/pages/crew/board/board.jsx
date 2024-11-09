import React, { useState, useRef, useEffect } from "react";
import CrewLayout from "../layout/crew_layout";
import styles from "../styles.module.css"; // Ensure this file includes the animation

export const CrewBoard = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const handleSend = () => {
    if (text.trim()) { // Ensure non-empty messages
      setMessages((prevMessages) => [text, ...prevMessages]);
      setText("");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth", // Smooth scroll to the bottom
      });
    }
  }, [messages]);

  return (
    <CrewLayout title="Board">
      <div className="flex flex-col w-full">
        <div
          ref={chatContainerRef}
          className="text-white border-[1px] p-2 gap-2 border-secondary-green rounded-md mx-2 mt-2 h-[300px] overflow-y-auto flex flex-col-reverse" // Reverse the order of messages
        >
          {messages.map((message, index) => (
            <div className="flex gap-2" key={index}>
            <span className={` max-w-[80%] break-words ml-auto py-1 px-5 bg-secondary-green rounded-xl`}>
              {message}
            </span>
            <img className="w-[30px] h-[30px] rounded-[50%]" src = "/avatar/avatar.png" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute ml-3 mt-[6px] flex gap-2">
        <textarea
          placeholder="Type a message..."
          className="w-[300px] text-xs  h-[45px] px-[7px] py-[3px] rounded-lg bg-transparent border-yellow-200 border-[1px] shadow-inner shadow-[rgba(255,255,255,0.3)]"
          onChange={(ev) => setText(ev.target.value)}
          value={text}
        ></textarea>
        <button
          onClick={handleSend}
          className="rounded-lg border-2 px-4  border-yellow-200 bg-transparent hover:shadow-glow_small hover:shadow-white shadow-inherit"
        >
          Send
        </button>
      </div>
    </CrewLayout>
  );
};