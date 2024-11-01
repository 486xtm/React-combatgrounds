import React, { useEffect, useState } from "react";
import moment from "moment";

import { Layout } from "../../../common/components";
import styles from "./styles.module.css";
import { deleteMessages, getMessage, sendMessage } from "../../../api/message";
import { useDispatch, useSelector } from "react-redux";
import { addBlockUser, removeBlockUser } from "../../../api/user";

export const MailCenter = () => {
  const mailType = localStorage.getItem("MAILTYPE") || "Inbox";
  const [viewType, setViewType] = useState(mailType);

  const [receiver, setReceiver] = useState(null);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [detailedViewMessage, setDetailedViewMessage] = useState(null);
  const [blockUserName, setBlockUserName] = useState("");
  const [unblockUserId, setUnblockUserId] = useState(null);
  const user = useSelector(({ user }) => user.user);

  const dispatch = useDispatch();
  const sentMessage = useSelector(({ mail }) => mail.sent);
  const receivedMessage = useSelector(({ mail }) => mail.received);

  const handleSubmit = () => {
    sendMessage({ receiver, subject, content }, dispatch);
  };

  const handleCheckAll = () => {
    const items = viewType === "Inbox" ? receivedMessage : sentMessage;
    if (!items) return;
    setCheckedItems(items.map((msg) => msg._id));
  };

  const handleClearAll = () => {
    deleteMessages(
      {
        checkedItems: messages ? messages.map((msg) => msg._id) : [],
        viewType: viewType !== "Inbox" ? "sender" : "receiver",
      },
      dispatch
    );
  };

  const handleDelete = () => {
    deleteMessages(
      { checkedItems, viewType: viewType !== "Inbox" ? "sender" : "receiver" },
      dispatch
    );
  };

  const handleUnread = () => {
  };

  const handleBlock = () => {
    addBlockUser({ blockUserName }, dispatch);
    setBlockUserName("");
  };

  const handleUnblock = () => {
    removeBlockUser({ unblockUserId }, dispatch);
  };
  const handleReply = (sender) => {
    setViewType("Compose");
    localStorage.setItem("MAILTYPE", "Compose");
    setReceiver(sender);
  }
  const handleSetType =(type) => {
    setViewType(type);
    localStorage.setItem("MAILTYPE", type);
    setDetailedViewMessage(null);
    setReceiver("");
  }
  useEffect(() => {
    getMessage(dispatch);
  }, [viewType]);

  useEffect(() => {
    setMessages(viewType === "Inbox" ? receivedMessage : sentMessage);
    setCheckedItems([]);
  }, [viewType, receivedMessage, sentMessage]);

  useEffect(() => {
  }, [checkedItems]);

  useEffect(() => {
    if (!user || !user.blocks || user.blocks.length === 0)
      setUnblockUserId(null);
    else setUnblockUserId(user.blocks[0]._id);
  }, [user]);

  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <img src="/pics/mail.gif" width="500" height="150" className="mx-auto" />
        <div
          className="flex px-3 py-2 justify-between border border-white mx-5"
          style={{ backgroundColor: "rgb(51,51,51)" }}
        >
          <div className="flex">
            <span
              className={`text-${
                viewType === "Inbox" ? "white" : "secondary"
              } text-lg font-bold mx-3 cursor-pointer`}
              onClick={() => handleSetType("Inbox")}
            >
              [<u>In Box</u>]
            </span>
            <span
              className={`text-${
                viewType === "Compose" ? "white" : "secondary"
              } text-lg font-bold mx-3 cursor-pointer`}
              onClick={() => handleSetType("Compose")}
            >
              [<u>Compose</u>]
            </span>
            <span
              className={`text-${
                viewType === "Sent" ? "white" : "secondary"
              } text-lg font-bold mx-3 cursor-pointer`}
              onClick={() => handleSetType("Sent")}
            >
              [<u>Sent</u>]
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span
              className="text-white text-sm font-bold cursor-pointer"
              onClick={handleCheckAll}
            >
              <u>check all</u>
            </span>
            <span
              className="text-white text-sm font-bold cursor-pointer"
              onClick={handleClearAll}
            >
              <u>clear all</u>
            </span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUnread}>Unread</button>
          </div>
        </div>
        {viewType !== "Compose" ? (
          detailedViewMessage === null ? (
            <>
              <table className={styles["mail-box"]}>
                <thead>
                  <tr>
                    <th></th>
                    <th>{viewType === "Inbox" ? "From" : "To"}</th>
                    <th>Subject</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {messages &&
                    messages.map((msg, id) => (
                      <tr key={`msg-${viewType}-${id}`}>
                        <td>
                          <input
                            type="checkbox"
                            checked={checkedItems.indexOf(msg._id) !== -1}
                            onChange={() => {
                              setCheckedItems(
                                checkedItems.indexOf(msg._id) === -1
                                  ? [...checkedItems, msg._id]
                                  : checkedItems.filter(
                                      (item) => item !== msg._id
                                    )
                              );
                            }}
                          />
                        </td>
                        <td>
                          <span className="text-white text-sm font-bold underline cursor-pointer hover:text-secondary">
                            {viewType !== "Inbox"
                              ? msg.receiver.name
                              : msg.sender.name}
                          </span>
                        </td>
                        <td>
                          <span
                            className="text-white text-sm font-bold underline cursor-pointer hover:text-secondary"
                            onClick={() => setDetailedViewMessage(msg)}
                          >
                            {msg.subject}
                          </span>
                        </td>
                        <td>
                          <span className="text-white text-sm font-bold">
                            {moment(msg.created_at).format(
                              "MMMM Do, YYYY, h:mm A"
                            )}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {messages && messages.length === 0 && (
                <span
                  className="px-2 text-sm justify-between border border-white mx-5 text-white text-center font-bold py-1"
                  style={{ backgroundColor: "rgb(51,51,51)" }}
                >
                  You have no messages.
                </span>
              )}
              <div className="flex mt-5 mx-5">
                <span className="text-white text-lg font-bold w-[200px]">
                  BlockList:
                </span>
                <div className="w-[300px]">
                  <select
                    className="my-auto text-xs w-[180px] rounded p-1"
                    onChange={(e) => {
                      setUnblockUserId(e.target.value);
                    }}
                  >
                    {user && user.blocks && user.blocks.length === 0 && (
                      <option>Empty</option>
                    )}
                    {user &&
                      user.blocks &&
                      user.blocks.map((usr, id) => {
                        return (
                          <option key={`block_${id}`} value={usr._id}>
                            {usr.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <button
                  className="text-xs w-[100px] disabled:bg-gray-500"
                  disabled={!unblockUserId}
                  onClick={handleUnblock}
                >
                  unblock player
                </button>
              </div>
              <div className="flex mt-3 mx-5">
                <span className="text-white text-lg font-bold w-[200px]">
                  Player Name:
                </span>
                <div className="w-[300px] flex">
                  <input
                    className="rounded text-sm w-[180px] px-1"
                    value={blockUserName}
                    onChange={(e) => setBlockUserName(e.target.value)}
                  />
                </div>
                <button className="tex-xs w-[100px]" onClick={handleBlock}>
                  Block player
                </button>
              </div>
            </>
          ) : (
            <div
              className="flex flex-col mx-5 border border-white p-3 gap-3"
              style={{ backgroundColor: "rgb(51,51,51)" }}
            >
              <div className="flex">
                <span className="w-[100px] text-white font-bold text-lg">
                  From:
                </span>
                <span className="text-white text-lg">
                  {detailedViewMessage.sender.name}
                </span>
              </div>
              <div className="flex">
                <span className="w-[100px] text-white font-bold text-lg">
                  To:
                </span>
                <span className="text-white text-lg">
                  {detailedViewMessage.receiver.name}
                </span>
              </div>
              <div className="flex">
                <span className="w-[100px] text-white font-bold text-lg">
                  Date:
                </span>
                <span className="text-white text-lg">
                  {moment(detailedViewMessage.created_at).format(
                    "MMMM Do, YYYY, h:mm A"
                  )}
                </span>
              </div>
              <div className="flex">
                <span className="w-[100px] text-white font-bold text-lg">
                  Subject:
                </span>
                <span className="text-white text-lg">
                  {detailedViewMessage.subject}
                </span>
              </div>

              <div className="flex">
                <span className="w-[100px] text-white font-bold text-lg">
                  Content:
                </span>
                <textarea className="flex-1 disabled:bg-white p-1" disabled>
                  {detailedViewMessage.content}
                </textarea>
              </div>
              <button onClick = {() => handleReply(detailedViewMessage.sender.name)} className="ml-[100px]">reply</button>
            </div>
          )
        ) : (
          <div
            className="flex flex-col mx-5 border border-white p-3 gap-3"
            style={{ backgroundColor: "rgb(51,51,51)" }}
          >
            <p className="font-bold text-sm text-[red] rounded">
              <u>CAUTION</u>: NEVER GIVE OUT YOUR GAME ACCOUNT PASSWORD OR EMAIL
              PASSWORD TO ANYONE. SCAMMERS CAN USE IT TO GAIN ACCESS TO YOUR
              PAYPAL ACCOUNT OR OTHER IMPORTANT PRIVATE DATA.
            </p>
            <div className="flex">
              <span className="w-[100px] font-bold text-lg text-white">
                To:
              </span>
              <input
                className="rounded flex-1"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
            </div>
            <div className="flex">
              <span className="w-[100px] font-bold text-lg text-white">
                Subject:
              </span>
              <input
                className="rounded flex-1"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div />
            <textarea
              rows="10"
              className="ml-[100px] rounded"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="ml-[100px]" onClick={handleSubmit}>
              send
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};
