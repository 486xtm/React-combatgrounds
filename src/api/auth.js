import axios from "./axios";

import { setLoginError, setRegisterError } from "../redux/errorSlice";
import { getUserInfo } from "./user";
import { basicURL } from "../common/constant";
import { logout } from "../redux/authSlice";
import { setToast } from "../redux/toastSlice";
// const basicURL = process.env.basicURL;
export const signIn = async (data, dispatch,socket) => {
  try {
    const { username, password } = data;
    const response = await axios.post(`${basicURL}/user/login`, {
      name: username,
      password,
    });

    const { refresh_token } = response.data;
    // Store the token securely
    localStorage.setItem("ACCESS_TOKEN", refresh_token);
    localStorage.setItem(
      "EXPIRATION_DATE",
      new Date().getTime() + 5 * 60 * 1000
    );
    getUserInfo(dispatch);
    socket.emit('login', user);

  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
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
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
    dispatch(setRegisterError({ msg: err.response?.data.msg || err.message }));
  }
};

export const signOut = async (dispatch, navigate, socket) => {
  try {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRATION_DATE");
    localStorage.removeItem("MAILTYPE");
    dispatch(logout());
    navigate("/login");
    // socket.disconnect();
    socket.emit("logout");
  } catch (err) {
    console.log(err.response?.data.msg || err.message);
  }
};
