import axios from "./axios";
import { setMessageError } from "../redux/errorSlice";
import { setMails } from "../redux/mailSlice";
import { setToast } from "../redux/toastSlice";
import { basicURL } from "../common/constant";

export const sendMessage = async (data, dispatch) => {
  try {
    const reqData = {
      content: data.content,
      subject: data.subject,
      receiverName: data.receiver,
    };
    await axios.post(`${basicURL}/message/send`, reqData);
    dispatch(setToast({ type: "success", msg: "Message Successfully Sent" }));
    dispatch(setMessageError(null));
  } catch (err) {
    dispatch(setToast({ type: "error", msg: err.message }));
    dispatch(setMessageError({ msg: err.response?.data.msg || err.message }));
  }
};

export const getMessage = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/message/read`);
    dispatch(setMails(res.data));
    dispatch(setMessageError({ msg: null }));
  } catch (err) {
    dispatch(setMessageError({ msg: err.response?.data.msg || err.message }));
  }
};

export const deleteMessages = async (data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/message/delete`, data);
    // if (data.viewType === "sender") dispatch(setReceivedMails(res.data));
    // else dispatch(setSentMails(res.data));
    dispatch(
      setToast({ type: "success", msg: "Message Deleted Successfully" })
    );
    getMessage(dispatch);
    dispatch(setMessageError({ msg: null }));
  } catch (err) {
    dispatch(setToast({ type: "error", msg: err.message }));
    dispatch(setMessageError({ msg: err.response?.data.msg || err.message }));
  }
};
