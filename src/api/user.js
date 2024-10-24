import axios from "./axios";
const basicURL = "http://localhost:5000/api";

import { setUser } from "../redux/userSlice";
import { setUpdateError } from "../redux/errorSlice";

export const getUserInfo = async (dispatch) => {
  try {
    const userInfo = await axios.get(`${basicURL}/user/infor`);
    dispatch(setUser(userInfo.data));
    dispatch(setUpdateError(null));
  } catch (err) {
    console.log(err);
    dispatch(setUpdateError(err.message));
  }
};

export const updateEmail = async (data, dispatch) => {
  try {
    const reqData = data;
    await axios.patch(`${basicURL}/user/update_useremail`, reqData);
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateName = async (data, dispatch) => {
  try {
    const reqData = data;
    await axios.patch(`${basicURL}/user/update_username`, reqData);
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateProfileInfo = async (data, dispatch) => {
  try {
    const reqData = data;
    await axios.patch(`${basicURL}/user/update_profile`, reqData);
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updatePassword = async (data, dispatch) => {
  try {
    const reqData = data;
    await axios.patch(`${basicURL}/user/update_password`, reqData);
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateYoutube = async (data, dispatch) => {
  try {
    const reqData = data;
    await axios.patch(`${basicURL}/user/update_youtube`, reqData);
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateCharacterType = async (data, dispatch) => {
  try {
    const reqData = data;
    console.log("reqData==>", reqData);
    await axios.patch(`${basicURL}/user/update_characterType`, reqData);
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateAvatar = async (data, dispatch) => {
  try {
    const { avatar } = data;
    if (!avatar) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", avatar);

    await axios.post(`${basicURL}/upload/update_avatar`, formData, {
      "Content-Type": "multipart/form-data",
    });
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const addBlockUser = async (data, dispatch) => {
  try {
    const userInfo = await axios.patch(`${basicURL}/user/add_blockuser`, data);
    console.log("userinfo===>", userInfo.data);
    dispatch(setUser(userInfo.data));
    dispatch(setUpdateError(null));
  } catch (err) {
    console.log(err);
    dispatch(setUpdateError(err.message));
  }
};

export const removeBlockUser = async (data, dispatch) => {
  try {
    const userInfo = await axios.patch(
      `${basicURL}/user/remove_blockuser`,
      data
    );
    dispatch(setUser(userInfo.data));
    dispatch(setUpdateError(null));
  } catch (err) {
    console.log(err);
    dispatch(setUpdateError(err.message));
  }
};

export const recruit = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/recruit`, data);
    dispatch(setUser(res.data.user));
    dispatch(setUpdateError(null));
  } catch (err) {
    console.log(err);
    dispatch(setUpdateError(err.message));
  }
};

export const raiseFund = async (data, dispatch) => {
  try {
    console.log("ttt===>", data.turn, typeof data.turn);
    const res = await axios.patch(`${basicURL}/user/raise_fund`, data);
    dispatch(setUser(res.data.user));
    dispatch(setUpdateError(null));
  } catch (err) {
    console.log(err);
    dispatch(setUpdateError(err.message));
  }
};
