import React, { useState } from "react";
import { Layout } from "../../../common/components";

import styles from "./styles.module.css";

export const MailCenter = () => {
  const [viewType, setViewType] = useState("Inbox");

  const messages = [];
  const blockList = [];

  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <img src="pics/mail.gif" width="500" height="150" className="mx-auto" />
        <div
          className="flex px-3 py-2 justify-between border border-white mx-5"
          style={{ backgroundColor: "rgb(51,51,51)" }}
        >
          <div className="flex">
            <span className="text-white text-lg font-bold mx-3 cursor-pointer">
              [<u>In Box</u>]
            </span>
            <span className="text-secondary text-lg font-bold mx-3 cursor-pointer">
              [<u>Compose</u>]
            </span>
            <span className="text-secondary text-lg font-bold mx-3 cursor-pointer">
              [<u>Sent</u>]
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-white text-sm font-bold cursor-pointer">
              [<u>check all</u>]
            </span>
            <span className="text-white text-sm font-bold cursor-pointer">
              [<u>clear all</u>]
            </span>
            <button>Delete</button>
            <button>Unread</button>
          </div>
        </div>
        <table className={styles["mail-box"]}>
          <thead>
            <tr>
              <th></th>
              <th>From</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, id) => (
              <tr key={`msg_${id}`}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
            BlackList:
          </span>
          <div className="w-[300px]">
            <select className="my-auto text-xs w-[180px]">
              {blockList && blockList.length === 0 && <option>Empty</option>}
              {blockList &&
                blockList.map((usr, id) => {
                  return <option key={`block_${id}`}>{usr}</option>;
                })}
            </select>
          </div>
          <button className="text-xs w-[100px]">Unblock player</button>
        </div>
        <div className="flex mt-3 mx-5">
          <span className="text-white text-lg font-bold w-[200px]">
            Player Name:
          </span>
          <div className="w-[300px] flex">
            <input />
          </div>
          <button className="tex-xs w-[100px]">Unblock player</button>
        </div>
      </div>
    </Layout>
  );
};
