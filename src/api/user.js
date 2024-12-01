import axios from "./axios";

import {
  setOther,
  setRankingData,
  setSpyInfo,
  setStats,
  setUser,
} from "../redux/userSlice";
import { login } from "../redux/authSlice";
import { setToast } from "../redux/toastSlice";
import { basicURL } from "../common/constant";
import { setUnreadMessagesCount } from "../redux/mailSlice";

export const getUserInfo = async (dispatch, navigate) => {
  try {
    const res = await axios.get(`${basicURL}/user/infor`);
    const { user, unreadMessagesCount } = res.data;
    dispatch(setUser(user));
    dispatch(login());
    dispatch(setUnreadMessagesCount(unreadMessagesCount));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    navigate("/login");
  }
};

export const getRankingData = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/user/ranked_users`);
    dispatch(setRankingData(res.data));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getStats = async (dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/user/stats`);
    dispatch(setStats(res.data.stats));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateEmail = async (data, dispatch) => {
  try {
    const reqData = data;

    await axios.patch(`${basicURL}/user/update_useremail`, reqData);
    dispatch(setToast({ type: "success", msg: "Email Changed Successfully!" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateName = async (data, dispatch) => {
  try {
    const reqData = data;

    await axios.patch(`${basicURL}/user/update_username`, reqData);

    dispatch(
      setToast({ type: "success", msg: "Your Name Successfully Changed!" })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateProfileInfo = async (data, dispatch) => {
  try {
    const reqData = data;

    await axios.patch(`${basicURL}/user/update_profile`, reqData);
    dispatch(
      setToast({ type: "success", msg: "Your Profile Successfully Changed!" })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updatePassword = async (data, dispatch) => {
  try {
    const reqData = data;
    await axios.patch(`${basicURL}/user/update_password`, reqData);
    dispatch(
      setToast({ type: "success", msg: "Your Password Successfully Changed!" })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateYoutube = async (data, dispatch) => {
  try {
    const reqData = data;

    await axios.patch(`${basicURL}/user/update_youtube`, reqData);
    dispatch(
      setToast({ type: "success", msg: "Youtube link changed successfully!" })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const updateCharacterType = async (data, dispatch) => {
  try {
    const reqData = data;

    await axios.patch(`${basicURL}/user/update_characterType`, reqData);
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

    await axios.post(`${basicURL}/upload/update_avatar`, formData, {
      "Content-Type": "multipart/form-data",
    });
    dispatch(
      setToast({ type: "success", msg: "Your Avatar Successfully Changed!" })
    );
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const addBlockUser = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/add_blockuser`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: "Block Successfully!" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const removeBlockUser = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/remove_blockuser`, data);
    const { user } = res.data;
    dispatch(setUser(user));
    dispatch(setToast({ type: "success", msg: "UnBlock Successfully!" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const raiseFund = async (data, dispatch) => {
  try {
    const res = await axios.patch(`${basicURL}/user/raise_fund`, data);
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const getUserById = async (data, dispatch) => {
  try {
    const res = await axios.get(`${basicURL}/user/get_user?id=${data.id}`);
    dispatch(setOther(res.data.user));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const recruit = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/user/recruit`, data);
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const hireSpy = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/user/spy`, data);
    dispatch(setSpyInfo(res.data.info));
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: res.data.msg }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
