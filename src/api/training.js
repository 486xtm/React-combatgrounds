import { basicURL } from "../common/constant";
import { setToast } from "../redux/toastSlice";
import { setUser } from "../redux/userSlice";
import axios from "./axios";

export const homeleave = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/user/homeleave`, data);
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};

export const training = async (data, dispatch) => {
  try {
    const res = await axios.post(`${basicURL}/user/training`, data);
    dispatch(setUser(res.data.user));
    dispatch(setToast({ type: "success", msg: "success" }));
  } catch (err) {
    dispatch(
      setToast({ type: "error", msg: err.response?.data.msg || err.message })
    );
  }
};
