import axios from "./axios";

import { setUser } from "../redux/userSlice";
import { setUpdateError } from "../redux/errorSlice";
import { login } from "../redux/authSlice";
import { setToast } from "../redux/toastSlice";
import { basicURL } from "../common/constant";
import { setOnlinePlayers } from "../redux/onlineSlice";
export const getUserInfo = async (dispatch, navigate) => {
  try {
    const res = await axios.get(`${basicURL}/user/infor`);
    dispatch(setUser(res.data));
    dispatch(login());
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError(err.message));
    navigate("/login");
  }
};

export const updateEmail = async (data, dispatch) => {
  try {
    const reqData = data;

    const res = await axios.patch(`${basicURL}/user/update_useremail`, reqData);
    const { user } = res.data;
    dispatch(setToast({ type: "success", msg: "Email Changed Successfully!" }));
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateName = async (data, dispatch) => {
  try {
    const reqData = data;

    const res = await axios.patch(`${basicURL}/user/update_username`, reqData);
    const { user } = res.data;

    dispatch(
      setToast({ type: "success", msg: "Your Name Successfully Changed!" })
    );
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateProfileInfo = async (data, dispatch) => {
  try {
    const reqData = data;

    const res = await axios.patch(`${basicURL}/user/update_profile`, reqData);
    const { user } = res.data;
    dispatch(
      setToast({ type: "success", msg: "Your Profile Successfully Changed!" })
    );
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updatePassword = async (data, dispatch) => {
  try {
    const reqData = data;
    await axios.patch(`${basicURL}/user/update_password`, reqData);
    dispatch(setUpdateError(null));
    dispatch(
      setToast({ type: "success", msg: "Your Password Successfully Changed!" })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateYoutube = async (data, dispatch) => {
  try {
    const reqData = data;

    const res = await axios.patch(`${basicURL}/user/update_youtube`, reqData);
    const { user } = res.data;
    dispatch(setUpdateError(null));
    dispatch(
      setToast({ type: "success", msg: "Youtube link changed successfully!" })
    );
    dispatch(setUser(user));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateCharacterType = async (data, dispatch) => {
  try {
    const reqData = data;

    const res = await axios.patch(
      `${basicURL}/user/update_characterType`,
      reqData
    );
    const { user } = res.data;
    dispatch(setUpdateError(null));
    dispatch(setUser(user));
    dispatch(
      setToast({
        type: "success",
        msg: "CharacterType Changed Successfully!",
      })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const updateAvatar = async (data, dispatch) => {
  try {
    const { avatar } = data;
    if (!avatar) {
      dispatch(setToast({ type: "error", msg: "Please Select Avatar First!" }));
      return;
    }

    const formData = new FormData();
    formData.append("file", avatar);

    const res = await axios.post(`${basicURL}/upload/update_avatar`, formData, {
      "Content-Type": "multipart/form-data",
    });
    const { user } = res.data;
    dispatch(setUpdateError(null));
    dispatch(setUser(user));
    dispatch(
      setToast({ type: "success", msg: "Your Avatar Successfully Changed!" })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError({ msg: err.response?.data.msg || err.message }));
  }
};

export const addBlockUser = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/add_blockuser`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
    dispatch(setToast({ type: "success", msg: "Block Successfully!" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError(err.message));
  }
};

export const removeBlockUser = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/remove_blockuser`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setUpdateError(null));
    dispatch(setToast({ type: "success", msg: "UnBlock Successfully!" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError(err.message));
  }
};

export const recruit = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/recruit`, data);
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError(err.message));
  }
};

export const raiseFund = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/raise_fund`, data);
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
    dispatch(setUpdateError(null));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setUpdateError(err.message));
  }
};
export const getOnlinePlayers = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/user/online`);
    dispatch(setOnlinePlayers(res.data.users));
  } catch (err) {
    console.log(err.response?.data.msg || err.message);
  }
}
