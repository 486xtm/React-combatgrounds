import axios from "axios";
const basicURL = "http://localhost:5000/api";
import { login } from "../redux/authSlice";
import { setLoginError } from "../redux/errorSlice";
// const basicURL = process.env.basicURL;
export const signIn = async ({ username, password }, dispatch) => {
  try {
    const response = await axios.post(`${basicURL}/user/login`, {
      name: username,
      password,
    });

    const { refresh_token } = response.data;

    // Store the token securely
    localStorage.setItem("token", refresh_token);
    const userInfo = await axios.get(`${basicURL}/user/infor`, {
      headers: {
        Authorization: refresh_token,
      },
    });
    dispatch(login(userInfo.data));
  } catch (err) {
    dispatch(setLoginError({msg:err.response?.data.msg || err.message}))
  }
};

export const signOut = async () => {};
