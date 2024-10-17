import axios from "axios";
const basicURL = "http://localhost:5000/api";
import { login } from "../redux/authSlice";
import { setLoginError, setRegisterError } from "../redux/errorSlice";
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
    localStorage.setItem("token", refresh_token);
    const userInfo = await axios.get(`${basicURL}/user/infor`, {
      headers: {
        Authorization: refresh_token,
      },
    });
    dispatch(login(userInfo.data));
    dispatch(setLoginError(null));
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
