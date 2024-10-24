import axios from "./axios";
const basicURL = "http://localhost:5000/api";
import { login } from "../redux/authSlice";
import {
  setLoginError,
  setRegisterError,
  setUpdateError,
} from "../redux/errorSlice";
// const basicURL = process.env.basicURL;
export const signIn = async (data, dispatch) => {
  try {
    const { username, password } = data;
    const response = await axios.post(`${basicURL}/user/login`, {
      name: username,
      password,
    });

    const { refresh_token } = response.data;

    // Store the token securely
    localStorage.setItem("ACCESS_TOKEN", refresh_token);
    getUserInfo(dispatch);
  } catch (err) {
    dispatch(setLoginError({ msg: err.response?.data.msg || err.message }));
  }
};

export const signUp = async (data, dispatch, navigate) => {
  try {
    const { username, email, cemail, newPass, cpass, characterType } = data;
    const reqData = {
      name: username,
      email,
      cemail,
      password: newPass,
      cpassword: cpass,
      characterType,
    };
    await axios.post(`${basicURL}/user/register`, reqData);
    dispatch(setRegisterError(null));
    navigate("/login");
  } catch (err) {
    dispatch(setRegisterError({ msg: err.response?.data.msg || err.message }));
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

export const getUserInfo = async (dispatch) => {
  try {
    const userInfo = await axios.get(`${basicURL}/user/infor`);
    dispatch(login(userInfo.data));
    dispatch(setLoginError(null));
  } catch (err) {
    console.log(err);
    dispatch(setLoginError(err.message));
  }
};

export const addBlockUser = async (data, dispatch) => {
  try {
    const userInfo = await axios.patch(`${basicURL}/user/add_blockuser`, data);
    console.log("userinfo===>", userInfo.data);
    dispatch(login(userInfo.data));
    dispatch(setLoginError(null));
  } catch (err) {
    console.log(err);
    dispatch(setLoginError(err.message));
  }
};

export const removeBlockUser = async (data, dispatch) => {
  try {
    const userInfo = await axios.patch(
      `${basicURL}/user/remove_blockuser`,
      data
    );
    dispatch(login(userInfo.data));
    dispatch(setLoginError(null));
  } catch (err) {
    console.log(err);
    dispatch(setLoginError(err.message));
  }
};

export const signOut = async () => {};
