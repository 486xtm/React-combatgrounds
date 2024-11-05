import axios from "./axios";

import { setLoginError, setRegisterError } from "../redux/errorSlice";
import { basicURL } from "../common/constant";
import { login, logout } from "../redux/authSlice";
import { setToast } from "../redux/toastSlice";

export const signIn = async (data, dispatch) => {
  try {
    const { username, password } = data;
    const res = await axios.post(`${basicURL}/user/login`, {
      name: username,
      password,
    });

    const { refresh_token } = res.data;
    // Store the token securely
    localStorage.setItem("ACCESS_TOKEN", refresh_token);
    localStorage.setItem(
      "EXPIRATION_DATE",
      new Date().getTime() + 5 * 60 * 1000
    );
    
    dispatch(login());

  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.res?.data.msg || err.message })
    );
    dispatch(setLoginError({ msg: err.res?.data.msg || err.message }));
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
    socket.emit("logout");
    dispatch(logout());
  } catch (err) {
    console.log(err.response?.data.msg || err.message);
  }
};
