import axios from "./axios";
const basicURL = "http://localhost:5000/api";
import { setMessageError } from "../redux/errorSlice";
import { setMails } from "../redux/mailSlice";

export const sendMessage = async (data, dispatch) => {
  try {
    const reqData = {
      content: data.content,
      subject: data.subject,
      receiverName: data.receiver,
    };
    await axios.post(`${basicURL}/message/send`, reqData);
    dispatch(setMessageError(null));
  } catch (err) {
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
    getMessage(dispatch);
    dispatch(setMessageError({ msg: null }));
  } catch (err) {
    dispatch(setMessageError({ msg: err.response?.data.msg || err.message }));
  }
};
