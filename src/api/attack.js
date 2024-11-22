import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";
import {
  setAttackables,
  setAttackResult,
  toggleShowModal,setAttackLogs
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

export const attackUser = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/user/attack`, data);
    const { attackResult, user } = res.data;
    dispatch(setAttackResult({ attackResult, user }));
    // dispatch(setToast({ type: "success", msg: res.data.msg || "succeess" }));
    dispatch(toggleShowModal(true));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getAttackLogs = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/user/attack_logs`);
    const { attacks, defences } = res.data;
    dispatch(setAttackLogs({ attacks, defences }));
    // dispatch(setToast({ type: "success", msg: res.data.msg || "succeess" }));
    dispatch(toggleShowModal(true));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
