import axios from "./axios";
const basicURL = "";

import {
  setLoginError,
  setRegisterError,
  setUpdateError,
} from "../redux/errorSlice";
import { getUserInfo } from "./user";

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

export const signOut = async () => {};
