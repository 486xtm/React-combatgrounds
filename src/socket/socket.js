import { io } from "socket.io-client";
import { socketURL } from "../common/constant";
import { store } from "../redux/store";
import { setOnlinePlayers } from "../redux/onlineSlice";
import { setUnreadMessagesCount } from "../redux/mailSlice";
import { setToast } from "../redux/toastSlice";
import {
  setPendingInviteList,
  setUnreadCrewChatCount,
} from "../redux/crewSlice";
import { handleBossAttack } from "../redux/userSlice";

export const socket = io(socketURL);
const showNotification = ({ title, content }) => {
  if (Notification.permission === "granted") {
    const notification = new Notification(title, {
      body: content,
      icon: "https://war-grounds.com/favicon.ico", // Optional: Add your icon URL
    });

    notification.onclick = () => {
      window.focus(); // Focus on the window when notification is clicked
    };
  } else {
    console.error("Notification permission not granted.");
  }
};
export const setupSocketListeners = () => {
  socket.on("onlinePlayer", (userList) => {
    store.dispatch(setOnlinePlayers(Object.values(userList)));
  });

  socket.on("receive message", (data) => {
    const unreadMessagesCount = store.getState().mail.unread;
    store.dispatch(setUnreadMessagesCount((unreadMessagesCount || 0) + 1));
    store.dispatch(
      setToast({ type: "info", msg: `New message arrived from ${data.from}` })
    );
    showNotification({
      title: "New Msg",
      content: `New message arrived from ${data.from}`,
    });
  });

  socket.on("_ambush", (data) => {
    store.dispatch(setToast({ type: "info", msg: data._msg }));
    if (data.ambushType === 1) {
      if (window.location.pathname === `/battlefield/${data.region_id}`) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    }
    if (data.ambushType === 2) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  });

  socket.on("receive_invite", (data) => {
    const pendingInviteList = store.getState().crew.pendingInviteList;
    store.dispatch(
      setToast({
        type: "info",
        msg: `You've got invited to ${data.from} as Rank${data.role}`,
      })
    );
    store.dispatch(setPendingInviteList((pendingInviteList || 0) + 1));
  });

  socket.on("receive_chat", () => {
    const unreadCrewChatCount = store.getState().crew.unreadCrewChatCount;
    store.dispatch(setUnreadCrewChatCount((unreadCrewChatCount || 0) + 1));
  });

  socket.on("attack_boss", (data) => {
    const { rewards, msg } = data;
    store.dispatch(setToast({ type: "success", msg }));
    store.dispatch(handleBossAttack(rewards));
  });
};

export const cleanupSocketListeners = () => {
  socket.off("onlinePlayer");
  socket.off("receive message");
  socket.off("_ambush");
  socket.off("attack_boss");
  socket.off("receive_chat");
  socket.off("receive_invite");
};
