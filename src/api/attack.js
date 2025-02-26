import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";
import {
  setAttackables,
  setAttackResult,
  toggleShowModal,
  setAttackLogs,
} from "../redux/userSlice";
import axios from "./axios";

export const getAttackableUsers = async (data, dispatch) => {
  try {
    const res = await axios.get(
      `${basicURL}/user/attackable?search=${data.key}`
    );
    // dispatch(setUser(user));
    dispatch(setAttackables(res.data.users));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const attackUser = async (data, search, dispatch) => {
  try {
    dispatch(toggleShowModal(false));
    const res = await axios.post(`${basicURL}/user/attack`, data);
    const { attackResult, user } = res.data;
    dispatch(setAttackResult({ attackResult, user }));
    dispatch(toggleShowModal(true));
    // getA ttackableUsers(search, dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    if (err.response?.data.msg.startsWith('You can attack in')) {
      dispatch(toggleShowModal(true));
    }
  }
};

export const getAttackLogs = async (data, dispatch) => {
  try {
    const urlSearchParams = new URLSearchParams(data).toString();
    const res = await axios.get(
      `${basicURL}/user/attack_logs?${urlSearchParams}`
    );
    const { logs, total } = res.data;
    dispatch(setAttackLogs({ logs, total }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
