import { basicURL } from "../common/constant";
import {
  setAds,
  setCrews,
  setSelectedUser,
  setUsers,
} from "../redux/adminSlice";
import { setToast } from "../redux/toastSlice";
import axios from "./axios";
import { getUserById } from "./user";

//admin
export const getAllUserInfo = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/user/all_infor`);
    const { users } = res.data;
    console.log("users==>", users);
    dispatch(setUsers(users));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const deleteUser = async (data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/user/delete`, data);
    const { users } = res.data;
    dispatch(setUsers(users));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const resetUser = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/update_info`, { data });
    dispatch(setToast({ type: "success", msg: res.data.msg || "succeess" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeAvatar = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/remove_avatar`, data);

    dispatch(setToast({ type: "success", msg: res.data.msg || "succeess" }));
    getUserById({ id: data.user_id }, dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getAllCrew = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/crews`);
    const { crews } = res.data;
    dispatch(setCrews(crews));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getCrewAds = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/crew/ads`);
    const { ads } = res.data;
    dispatch(setAds(ads));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeCrew = async (data, dispatch) => {
  try {
    const res = await axios.delete(`${basicURL}/crew/remove`, data);
    dispatch(setToast({ type: "success", msg: res.data.msg || "success" }));
    getAllCrew(dispatch);
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
